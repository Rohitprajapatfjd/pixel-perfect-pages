import { api } from '@/services/api';
import { PermissionSection, UpsertUserPayload, UserFiltersState, UserRecord, UserStatus } from '@/types/userManagement';

const shouldUseMock = !import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_USE_ADMIN_MOCK === 'true';

const mockPermissionSections: PermissionSection[] = [
  {
    key: 'core',
    label: 'Core',
    items: [{ key: 'dashboard.view', label: 'Dashboard' }],
  },
  {
    key: 'itineraries',
    label: 'Itineraries',
    items: [
      { key: 'itinerary.view', label: 'View' },
      { key: 'itinerary.create', label: 'Create' },
      { key: 'itinerary.edit', label: 'Edit' },
      { key: 'itinerary.delete', label: 'Delete' },
    ],
  },
  {
    key: 'users',
    label: 'Users',
    items: [
      { key: 'users.view', label: 'View' },
      { key: 'users.create', label: 'Create' },
      { key: 'users.edit', label: 'Edit' },
      { key: 'users.delete', label: 'Delete' },
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

export const userManagementApi = {
  getUsers: (filters: UserFiltersState) =>
    requestWithFallback(
      () => api.get<UserRecord[]>('/api/admin/users', filters),
      () => applyFilters(userStore, filters),
    ),

  getPermissionSections: () =>
    requestWithFallback(
      () => api.get<PermissionSection[]>('/api/admin/permissions/grouped'),
      () => mockPermissionSections,
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
      () => api.put<UserRecord>(`/api/admin/users/${id}/permissions`, { permissions }),
      () => {
        let updated: UserRecord | undefined;
        userStore = userStore.map((user) => {
          if (user.id !== id) return user;
          updated = { ...user, permissions };
          return updated;
        });
        if (!updated) throw new Error('User not found');
        return updated;
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
