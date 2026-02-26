import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { apiClient } from '@/api/client';
import { AuthState, AuthUser } from '@/types/rbac';
import { tokenStorage } from '@/utils/tokenStorage';

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  setAuthSession: (auth: AuthState) => void;
  logout: () => void;
}

const DEFAULT_PERMISSIONS = ['manage-roles', 'manage-permissions', 'manage-users', 'manage-hr', 'view-report'];

const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_KEY = 'auth_state';

const mapLegacyUser = (legacy: any): AuthUser | null => {
  if (!legacy) return null;

  const role = legacy.role === 'merchant' ? 'merchant' : 'super-admin';

  return {
    id: legacy.id,
    name: legacy.name,
    email: legacy.email,
    roles: [role],
    permissions: role === 'merchant' ? [] : DEFAULT_PERMISSIONS,
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>(() => {
    const saved = localStorage.getItem(AUTH_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { user: null, token: null };
      }
    }

    const legacyUser = localStorage.getItem('helpdesk_user');
    if (legacyUser) {
      try {
        return { user: mapLegacyUser(JSON.parse(legacyUser)), token: tokenStorage.get() };
      } catch {
        return { user: null, token: null };
      }
    }

    return { user: null, token: null };
  });

  const setAuthSession = useCallback((auth: AuthState) => {
    setState(auth);
    if (auth.token) tokenStorage.set(auth.token);
    else tokenStorage.clear();
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  }, []);

  const logout = useCallback(() => {
    setState({ user: null, token: null });
    tokenStorage.clear();
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem('helpdesk_user');
  }, []);

  useEffect(() => {
    apiClient.setUnauthorizedHandler(logout);
  }, [logout]);

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    const normalized = email.trim().toLowerCase();

    const role = normalized === 'user@gmail.com' ? 'merchant' : 'super-admin';
    const user: AuthUser = {
      id: role === 'merchant' ? 'merchant-1' : 1,
      name: role === 'merchant' ? 'Merchant' : 'Admin',
      email: normalized,
      roles: [role],
      permissions: role === 'merchant' ? [] : DEFAULT_PERMISSIONS,
    };

    setAuthSession({ user, token: 'demo-sanctum-token' });
    return true;
  }, [setAuthSession]);

  const register = useCallback(async (name: string, email: string, _password: string): Promise<boolean> => {
    const normalized = email.trim().toLowerCase();
    const user: AuthUser = {
      id: Date.now(),
      name,
      email: normalized,
      roles: ['super-admin'],
      permissions: DEFAULT_PERMISSIONS,
    };

    setAuthSession({ user, token: 'demo-sanctum-token' });
    return true;
  }, [setAuthSession]);

  const value = useMemo(
    () => ({
      user: state.user,
      token: state.token,
      isAuthenticated: Boolean(state.user && state.token),
      login,
      register,
      setAuthSession,
      logout,
    }),
    [login, logout, register, setAuthSession, state.token, state.user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
