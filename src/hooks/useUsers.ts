import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { userManagementApi } from '@/services/userManagementApi';
import { UserFiltersState } from '@/types/userManagement';

export const USER_QUERY_KEY = 'users';

export const useUsers = (filters: UserFiltersState) => {
  const usersQuery = useQuery({
    queryKey: [USER_QUERY_KEY, filters],
    queryFn: () => userManagementApi.getUsers(filters),
  });

  const stats = useMemo(() => {
    const users = usersQuery.data ?? [];
    return {
      totalUsers: users.length,
      activeUsers: users.filter((user) => user.status === 'Active').length,
      suspendedUsers: users.filter((user) => user.status === 'Suspended').length,
      subAgentLogins: users.reduce((acc, user) => acc + user.subAgentLogins, 0),
    };
  }, [usersQuery.data]);

  return {
    ...usersQuery,
    stats,
  };
};
