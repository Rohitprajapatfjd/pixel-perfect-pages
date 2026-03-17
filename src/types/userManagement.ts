export type UserRole = 'Admin' | 'Sub-Agent' | 'Staff';
export type UserStatus = 'Active' | 'Suspended';

export interface UserRecord {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: UserRole;
  password: string;
  status: UserStatus;
  permissions: string[];
  lastLogin: string;
  subAgentLogins: number;
}

export interface UserFiltersState {
  search: string;
  role: 'All' | UserRole;
  status: 'All' | UserStatus;
}

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  subAgentLogins: number;
}

export interface PermissionItem {
  key: string;
  label: string;
}

export interface PermissionSection {
  key: string;
  label: string;
  items: PermissionItem[];
}

export interface UpsertUserPayload {
  name: string;
  email: string;
  mobile: string;
  role: UserRole;
  password: string;
}
