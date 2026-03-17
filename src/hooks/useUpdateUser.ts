import { useMutation, useQueryClient } from '@tanstack/react-query';
import { USER_QUERY_KEY } from '@/hooks/useUsers';
import { userManagementApi } from '@/services/userManagementApi';
import { UpsertUserPayload, UserRecord, UserStatus } from '@/types/userManagement';

const mapUsersInCache = (prev: unknown, update: (users: UserRecord[]) => UserRecord[]) => {
  if (!Array.isArray(prev)) return prev;
  return update(prev as UserRecord[]);
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const createUser = useMutation({
    mutationFn: (payload: UpsertUserPayload) => userManagementApi.createUser(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] }),
  });

  const updateUser = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpsertUserPayload }) => userManagementApi.updateUser(id, payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] }),
  });

  const deleteUser = useMutation({
    mutationFn: (id: number) => userManagementApi.deleteUser(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] }),
  });

  const updateStatus = useMutation({
    mutationFn: ({ id, status }: { id: number; status: UserStatus }) => userManagementApi.updateStatus(id, status),
    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({ queryKey: [USER_QUERY_KEY] });
      const previous = queryClient.getQueriesData({ queryKey: [USER_QUERY_KEY] });

      previous.forEach(([key, data]) => {
        queryClient.setQueryData(key, mapUsersInCache(data, (users) => users.map((user) => (user.id === id ? { ...user, status } : user))));
      });

      return { previous };
    },
    onError: (_error, _variables, context) => {
      context?.previous.forEach(([key, data]) => {
        queryClient.setQueryData(key, data);
      });
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] }),
  });

  return { createUser, updateUser, deleteUser, updateStatus };
};
