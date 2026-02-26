export interface AuthUser {
  id: number | string;
  name: string;
  email?: string;
  roles: string[];
  permissions: string[];
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
}

export interface Permission {
  id: number;
  name: string;
  group: string;
}

export interface Role {
  id: number;
  name: string;
  permissions: Permission[];
}

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  roles: string[];
}
