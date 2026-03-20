import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { hotPickApi } from '@/services/hotPickApi';
import type { HotPick, HotPickPayload } from '@/types/hotPick';
import { HOT_PICKS_QUERY_KEY } from './useHotPicks';

export const useUpdateHotPick = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: HotPickPayload }) => hotPickApi.update(id, payload),
    onMutate: async ({ id, payload }) => {
      await queryClient.cancelQueries({ queryKey: HOT_PICKS_QUERY_KEY });
      const previous = queryClient.getQueryData<HotPick[]>(HOT_PICKS_QUERY_KEY);

      queryClient.setQueryData<HotPick[]>(HOT_PICKS_QUERY_KEY, (old = []) =>
        old.map((item) => (item.id === id ? { ...item, ...payload } : item))
      );
      return { previous };
    },
    onError: (_error, _payload, context) => {
      if (context?.previous) {
        queryClient.setQueryData(HOT_PICKS_QUERY_KEY, context.previous);
      }
      toast.error('Unable to update hot pick');
    },
    onSuccess: (response) => {
      toast.success(response.message || 'Hot pick updated successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: HOT_PICKS_QUERY_KEY });
    },
  });
};
