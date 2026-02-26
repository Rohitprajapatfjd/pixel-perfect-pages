import { AdminUser, Permission, Role } from '@/types/rbac';

export const mockPermissions: Permission[] = [
  { id: 1, name: 'manage-roles', group: 'HR' },
  { id: 2, name: 'manage-permissions', group: 'HR' },
  { id: 3, name: 'manage-users', group: 'HR' },
  { id: 4, name: 'view-report', group: 'Reports' },
  { id: 5, name: 'export-report', group: 'Reports' },
  { id: 6, name: 'manage-career-page', group: 'Career' },
  { id: 7, name: 'manage-finance', group: 'Finance' },
];

export const mockRoles: Role[] = [
  {
    id: 1,
    name: 'super-admin',
    permissions: mockPermissions.filter((item) => ['manage-roles', 'manage-permissions', 'manage-users', 'view-report'].includes(item.name)),
  },
  {
    id: 2,
    name: 'hr-manager',
    permissions: mockPermissions.filter((item) => ['manage-users', 'manage-career-page'].includes(item.name)),
  },
  {
    id: 3,
    name: 'finance-manager',
    permissions: mockPermissions.filter((item) => ['manage-finance', 'view-report'].includes(item.name)),
  },
];

export const mockUsers: AdminUser[] = [
  { id: 1, name: 'Admin', email: 'admin@example.com', roles: ['super-admin'] },
  { id: 2, name: 'Sarah HR', email: 'sarah.hr@example.com', roles: ['hr-manager'] },
  { id: 3, name: 'Frank Finance', email: 'frank.finance@example.com', roles: ['finance-manager'] },
];
