import { apiClient } from '@/api/client';
import { mockPermissions, mockRoles, mockUsers } from '@/data/adminMockData';
import { AdminUser, Permission, Role } from '@/types/rbac';

let permissionsStore: Permission[] = [...mockPermissions];
let rolesStore: Role[] = [...mockRoles];
let usersStore: AdminUser[] = [...mockUsers];

const shouldUseMock = !import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_USE_ADMIN_MOCK === 'true';

const withFallback = async <T>(request: () => Promise<T>, fallback: () => T): Promise<T> => {
  if (shouldUseMock) {
    return fallback();
  }

  try {
    return await request();
  } catch {
    return fallback();
  }
};

export const adminApi = {
  getRoles: () =>
    withFallback(
      () => apiClient.get<Role[]>('/api/admin/roles'),
      () => [...rolesStore],
    ),

  createRole: (payload: { name: string }) =>
    withFallback(
      () => apiClient.post<Role>('/api/admin/roles', payload),
      () => {
        const created: Role = { id: Date.now(), name: payload.name, permissions: [] };
        rolesStore = [created, ...rolesStore];
        return created;
      },
    ),

  updateRole: (id: number, payload: { name: string }) =>
    withFallback(
      () => apiClient.put<Role>(`/api/admin/roles/${id}`, payload),
      () => {
        let updated: Role | null = null;
        rolesStore = rolesStore.map((role) => {
          if (role.id !== id) return role;
          updated = { ...role, name: payload.name };
          return updated;
        });
        return updated ?? { id, name: payload.name, permissions: [] };
      },
    ),

  deleteRole: (id: number) =>
    withFallback(
      () => apiClient.delete<void>(`/api/admin/roles/${id}`),
      () => {
        rolesStore = rolesStore.filter((role) => role.id !== id);
      },
    ),

  syncRolePermissions: (id: number, payload: { permissions: string[] }) =>
    withFallback(
      () => apiClient.post<Role>(`/api/admin/roles/${id}/sync-permissions`, payload),
      () => {
        let updated: Role | null = null;
        rolesStore = rolesStore.map((role) => {
          if (role.id !== id) return role;
          updated = {
            ...role,
            permissions: permissionsStore.filter((item) => payload.permissions.includes(item.name)),
          };
          return updated;
        });
        return updated ?? { id, name: '', permissions: [] };
      },
    ),

  getPermissions: () =>
    withFallback(
      () => apiClient.get<Permission[]>('/api/admin/permissions'),
      () => [...permissionsStore],
    ),

  createPermission: (payload: { name: string; group: string }) =>
    withFallback(
      () => apiClient.post<Permission>('/api/admin/permissions', payload),
      () => {
        const created: Permission = { id: Date.now(), ...payload };
        permissionsStore = [created, ...permissionsStore];
        return created;
      },
    ),

  getUsers: () =>
    withFallback(
      () => apiClient.get<AdminUser[]>('/api/admin/users'),
      () => [...usersStore],
    ),

  assignRole: (userId: number, payload: { roles: string[] }) =>
    withFallback(
      () => apiClient.post<AdminUser>(`/api/admin/users/${userId}/assign-role`, payload),
      () => {
        let updated: AdminUser | null = null;
        usersStore = usersStore.map((user) => {
          if (user.id !== userId) return user;
          updated = { ...user, roles: payload.roles };
          return updated;
        });
        return updated ?? { id: userId, name: '', email: '', roles: payload.roles };
      },
    ),

  removeRole: (userId: number, payload: { roles: string[] }) =>
    withFallback(
      () => apiClient.post<AdminUser>(`/api/admin/users/${userId}/remove-role`, payload),
      () => {
        let updated: AdminUser | null = null;
        usersStore = usersStore.map((user) => {
          if (user.id !== userId) return user;
          updated = { ...user, roles: user.roles.filter((role) => !payload.roles.includes(role)) };
          return updated;
        });
        return updated ?? { id: userId, name: '', email: '', roles: [] };
      },
    ),
};
