import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PERMISSIONS_QUERY_KEY } from '@/hooks/usePermissions';
import { USER_PERMISSIONS_QUERY_KEY } from '@/hooks/useUserPermissions';
import { USER_QUERY_KEY } from '@/hooks/useUsers';
import { userManagementApi } from '@/services/userManagementApi';
import { UserRecord } from '@/types/userManagement';

export const useUpdatePermissions = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, permissions }: { id: number; permissions: string[] }) => userManagementApi.updatePermissions(id, permissions),
    onMutate: async ({ id, permissions }) => {
      await queryClient.cancelQueries({ queryKey: [USER_QUERY_KEY] });
      await queryClient.cancelQueries({ queryKey: [USER_PERMISSIONS_QUERY_KEY, id] });

      const previousUsers = queryClient.getQueriesData({ queryKey: [USER_QUERY_KEY] });
      const previousUserPermissions = queryClient.getQueryData([USER_PERMISSIONS_QUERY_KEY, id]);

      previousUsers.forEach(([key, data]) => {
        if (!Array.isArray(data)) return;
        queryClient.setQueryData(
          key,
          (data as UserRecord[]).map((user) => (user.id === id ? { ...user, permissions } : user)),
        );
      });

      queryClient.setQueryData([USER_PERMISSIONS_QUERY_KEY, id], (prev: { permissions?: string[] } | undefined) => ({
        ...(prev ?? {}),
        id,
        permissions,
      }));

      return { previousUsers, previousUserPermissions };
    },
    onError: (_error, variables, context) => {
      context?.previousUsers.forEach(([key, data]) => {
        queryClient.setQueryData(key, data);
      });
      queryClient.setQueryData([USER_PERMISSIONS_QUERY_KEY, variables.id], context?.previousUserPermissions);
    },
    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [USER_PERMISSIONS_QUERY_KEY, variables.id] });
      queryClient.invalidateQueries({ queryKey: [PERMISSIONS_QUERY_KEY] });
    },
  });
};
