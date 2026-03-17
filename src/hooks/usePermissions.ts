import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { USER_QUERY_KEY } from '@/hooks/useUsers';
import { userManagementApi } from '@/services/userManagementApi';
import { UserRecord } from '@/types/userManagement';

const PERMISSIONS_QUERY_KEY = 'permission-sections';

export const usePermissions = () => {
  const queryClient = useQueryClient();

  const sectionsQuery = useQuery({
    queryKey: [PERMISSIONS_QUERY_KEY],
    queryFn: userManagementApi.getPermissionSections,
  });

  const updatePermissions = useMutation({
    mutationFn: ({ id, permissions }: { id: number; permissions: string[] }) =>
      userManagementApi.updatePermissions(id, permissions),
    onMutate: async ({ id, permissions }) => {
      await queryClient.cancelQueries({ queryKey: [USER_QUERY_KEY] });
      const previous = queryClient.getQueriesData({ queryKey: [USER_QUERY_KEY] });

      previous.forEach(([key, data]) => {
        if (!Array.isArray(data)) return;
        queryClient.setQueryData(
          key,
          (data as UserRecord[]).map((user) => (user.id === id ? { ...user, permissions } : user)),
        );
      });

      return { previous };
    },
    onError: (_error, _variables, context) => {
      context?.previous.forEach(([key, data]) => queryClient.setQueryData(key, data));
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] }),
  });

  return { sectionsQuery, updatePermissions };
};
