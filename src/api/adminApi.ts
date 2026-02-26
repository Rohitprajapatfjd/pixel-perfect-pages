import { apiClient } from '@/api/client';
import { AdminUser, Permission, Role } from '@/types/rbac';

export const adminApi = {
  getRoles: () => apiClient.get<Role[]>('/api/admin/roles'),
  createRole: (payload: { name: string }) => apiClient.post<Role>('/api/admin/roles', payload),
  updateRole: (id: number, payload: { name: string }) => apiClient.put<Role>(`/api/admin/roles/${id}`, payload),
  deleteRole: (id: number) => apiClient.delete<void>(`/api/admin/roles/${id}`),
  syncRolePermissions: (id: number, payload: { permissions: string[] }) =>
    apiClient.post<Role>(`/api/admin/roles/${id}/sync-permissions`, payload),

  getPermissions: () => apiClient.get<Permission[]>('/api/admin/permissions'),
  createPermission: (payload: { name: string; group: string }) =>
    apiClient.post<Permission>('/api/admin/permissions', payload),

  getUsers: () => apiClient.get<AdminUser[]>('/api/admin/users'),
  assignRole: (userId: number, payload: { roles: string[] }) =>
    apiClient.post<AdminUser>(`/api/admin/users/${userId}/assign-role`, payload),
  removeRole: (userId: number, payload: { roles: string[] }) =>
    apiClient.post<AdminUser>(`/api/admin/users/${userId}/remove-role`, payload),
};
