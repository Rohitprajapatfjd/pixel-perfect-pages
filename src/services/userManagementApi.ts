import { api } from '@/services/api';
import {
  PermissionApiItem,
  PermissionSection,
  UpsertUserPayload,
  UserFiltersState,
  UserPermissionPayload,
  UserRecord,
  UserStatus,
} from '@/types/userManagement';

const shouldUseMock = !import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_USE_ADMIN_MOCK === 'true';

const mockPermissionSections: PermissionSection[] = [
  {
    key: 'core',
    label: 'Core',
    items: [{ key: 'dashboard.view', label: 'Dashboard', description: 'Access dashboard.view' }],
  },
  {
    key: 'itineraries',
    label: 'Itineraries',
    items: [
      { key: 'itinerary.view', label: 'View', description: 'Access itinerary.view' },
      { key: 'itinerary.create', label: 'Create', description: 'Access itinerary.create' },
      { key: 'itinerary.edit', label: 'Edit', description: 'Access itinerary.edit' },
      { key: 'itinerary.delete', label: 'Delete', description: 'Access itinerary.delete' },
    ],
  },
  {
    key: 'users',
    label: 'Users',
    items: [
      { key: 'users.view', label: 'View', description: 'Access users.view' },
      { key: 'users.create', label: 'Create', description: 'Access users.create' },
      { key: 'users.edit', label: 'Edit', description: 'Access users.edit' },
      { key: 'users.delete', label: 'Delete', description: 'Access users.delete' },
    ],
  },
];

let userStore: UserRecord[] = [
  {
    id: 1,
    name: 'Nina Howard',
    email: 'nina@acme.io',
    mobile: '+1 840 224 0981',
    role: 'Admin',
    password: 'sup3r$ecret',
    status: 'Active',
    permissions: mockPermissionSections.flatMap((section) => section.items.map((item) => item.key)),
    lastLogin: new Date().toISOString(),
    subAgentLogins: 42,
  },
  {
    id: 2,
    name: 'Ethan Lee',
    email: 'ethan@acme.io',
    mobile: '+1 213 558 1200',
    role: 'Sub-Agent',
    password: 'agent@123',
    status: 'Active',
    permissions: ['dashboard.view', 'itinerary.view', 'itinerary.create'],
    lastLogin: new Date(Date.now() - 1000 * 60 * 80).toISOString(),
    subAgentLogins: 18,
  },
  {
    id: 3,
    name: 'Olivia Dunn',
    email: 'olivia@acme.io',
    mobile: '+1 415 808 1109',
    role: 'Staff',
    password: 'staff@123',
    status: 'Suspended',
    permissions: ['dashboard.view', 'itinerary.view'],
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 34).toISOString(),
    subAgentLogins: 0,
  },
];

const applyFilters = (users: UserRecord[], filters: UserFiltersState) =>
  users.filter((user) => {
    const search = filters.search.toLowerCase();
    const matchedSearch = !search || user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search);
    const matchedRole = filters.role === 'All' || user.role === filters.role;
    const matchedStatus = filters.status === 'All' || user.status === filters.status;
    return matchedSearch && matchedRole && matchedStatus;
  });

const requestWithFallback = async <T>(request: () => Promise<T>, fallback: () => T): Promise<T> => {
  if (shouldUseMock) return fallback();
  try {
    return await request();
  } catch {
    return fallback();
  }
};

const startCasePermission = (permissionName: string) =>
  permissionName
    .replace(/[._-]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => `${word[0]?.toUpperCase() ?? ''}${word.slice(1)}`)
    .join(' ');

const mapPermissionsToSections = (permissions: PermissionApiItem[]): PermissionSection[] => {
  const grouped = permissions.reduce<Record<string, PermissionApiItem[]>>((acc, permission) => {
    const groupKey = permission.group?.trim() || 'General';
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(permission);
    return acc;
  }, {});

  return Object.entries(grouped).map(([group, items]) => ({
    key: group.toLowerCase().replace(/\s+/g, '-'),
    label: group,
    items: items.map((item) => ({
      key: item.name,
      label: startCasePermission(item.name),
      description: `Access ${item.name}`,
    })),
  }));
};

const toUserPermissionPayload = (user: UserRecord): UserPermissionPayload => ({
  id: user.id,
  name: user.name,
  role: user.role,
  permissions: user.permissions,
});

export const userManagementApi = {
  getUsers: (filters: UserFiltersState) =>
    requestWithFallback(
      () => api.get<UserRecord[]>('/api/admin/users', filters),
      () => applyFilters(userStore, filters),
    ),

  getPermissions: () =>
    requestWithFallback(
      () => api.get<PermissionApiItem[]>('/api/permissions'),
      () =>
        mockPermissionSections.flatMap((section, sectionIndex) =>
          section.items.map((item, itemIndex) => ({
            id: sectionIndex * 100 + itemIndex + 1,
            name: item.key,
            group: section.label,
          })),
        ),
    ),

  getPermissionSections: () =>
    requestWithFallback(
      async () => mapPermissionsToSections(await api.get<PermissionApiItem[]>('/api/permissions')),
      () => mockPermissionSections,
    ),

  getUserPermissions: (id: number) =>
    requestWithFallback(
      () => api.get<UserPermissionPayload>(`/api/users/${id}`),
      () => {
        const user = userStore.find((item) => item.id === id);
        if (!user) throw new Error('User not found');
        return toUserPermissionPayload(user);
      },
    ),

  createUser: (payload: UpsertUserPayload) =>
    requestWithFallback(
      () => api.post<UserRecord>('/api/admin/users', payload),
      () => {
        const created: UserRecord = {
          ...payload,
          id: Date.now(),
          status: 'Active',
          permissions: ['dashboard.view', 'itinerary.view'],
          lastLogin: new Date().toISOString(),
          subAgentLogins: 0,
        };
        userStore = [created, ...userStore];
        return created;
      },
    ),

  updateUser: (id: number, payload: UpsertUserPayload) =>
    requestWithFallback(
      () => api.put<UserRecord>(`/api/admin/users/${id}`, payload),
      () => {
        let updated: UserRecord | undefined;
        userStore = userStore.map((user) => {
          if (user.id !== id) return user;
          updated = { ...user, ...payload };
          return updated;
        });
        if (!updated) throw new Error('User not found');
        return updated;
      },
    ),

  updateStatus: (id: number, status: UserStatus) =>
    requestWithFallback(
      () => api.patch<UserRecord>(`/api/admin/users/${id}/status`, { status }),
      () => {
        let updated: UserRecord | undefined;
        userStore = userStore.map((user) => {
          if (user.id !== id) return user;
          updated = { ...user, status };
          return updated;
        });
        if (!updated) throw new Error('User not found');
        return updated;
      },
    ),

  updatePermissions: (id: number, permissions: string[]) =>
    requestWithFallback(
      () => api.post<UserPermissionPayload>(`/api/users/${id}/permissions`, { permissions }),
      () => {
        let updated: UserRecord | undefined;
        userStore = userStore.map((user) => {
          if (user.id !== id) return user;
          updated = { ...user, permissions };
          return updated;
        });
        if (!updated) throw new Error('User not found');
        return toUserPermissionPayload(updated);
      },
    ),

  deleteUser: (id: number) =>
    requestWithFallback(
      () => api.delete<void>(`/api/admin/users/${id}`),
      () => {
        userStore = userStore.filter((user) => user.id !== id);
      },
    ),
};
