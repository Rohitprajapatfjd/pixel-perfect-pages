import { useQuery } from '@tanstack/react-query';
import { userManagementApi } from '@/services/userManagementApi';

export const USER_PERMISSIONS_QUERY_KEY = 'user-permissions';

export const useUserPermissions = (userId?: number) =>
  useQuery({
    queryKey: [USER_PERMISSIONS_QUERY_KEY, userId],
    queryFn: () => userManagementApi.getUserPermissions(userId as number),
    enabled: Boolean(userId),
  });
