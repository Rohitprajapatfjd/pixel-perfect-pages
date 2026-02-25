import React, { createContext, useContext, useState, useCallback } from 'react';
import { User, UserRole } from '@/types/ticket';
import { mockUsers } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => boolean;
  register: (name: string, email: string, password: string, role: UserRole) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('helpdesk_registered_users');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('helpdesk_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const login = useCallback((email: string, _password: string, role: UserRole): boolean => {
    const normalizedEmail = email.trim().toLowerCase();

    if ((role === 'admin' || role === 'merchant') && normalizedEmail === 'admin@gmail.com') {
      const staticUser: User = {
        id: `static-${role}`,
        name: role === 'admin' ? 'Static Admin' : 'Static Merchant',
        email: 'admin@gmail.com',
        role,
      };
      setUser(staticUser);
      localStorage.setItem('helpdesk_user', JSON.stringify(staticUser));
      return true;
    }

    const availableUsers = [...mockUsers, ...registeredUsers];
    const found = availableUsers.find((existingUser) => existingUser.email.toLowerCase() === normalizedEmail && existingUser.role === role);

    if (found) {
      setUser(found);
      localStorage.setItem('helpdesk_user', JSON.stringify(found));
      return true;
    }

    return false;
  }, [registeredUsers]);

  const register = useCallback((name: string, email: string, _password: string, role: UserRole): boolean => {
    const normalizedEmail = email.trim().toLowerCase();
    const availableUsers = [...mockUsers, ...registeredUsers];

    if (availableUsers.some((existingUser) => existingUser.email.toLowerCase() === normalizedEmail && existingUser.role === role)) {
      return false;
    }

    const newUser: User = {
      id: `${role}-${Date.now()}`,
      name,
      email: normalizedEmail,
      role,
    };

    setRegisteredUsers((prev) => {
      const updatedUsers = [...prev, newUser];
      localStorage.setItem('helpdesk_registered_users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });

    setUser(newUser);
    localStorage.setItem('helpdesk_user', JSON.stringify(newUser));

    return true;
  }, [registeredUsers]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('helpdesk_user');
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
