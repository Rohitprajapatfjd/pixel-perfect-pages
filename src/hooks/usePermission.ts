import { useMemo } from 'react';
import { useAuth } from '@/context/AuthContext';

export const usePermission = () => {
  const { user } = useAuth();

  const hasPermission = useMemo(
    () => (permission: string) => user?.permissions?.includes(permission) ?? false,
    [user?.permissions],
  );

  return { hasPermission, permissions: user?.permissions ?? [] };
};
