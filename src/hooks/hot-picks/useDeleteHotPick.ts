import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { hotPickApi } from '@/services/hotPickApi';
import type { HotPick } from '@/types/hotPick';
import { HOT_PICKS_QUERY_KEY } from './useHotPicks';

export const useDeleteHotPick = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => hotPickApi.remove(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: HOT_PICKS_QUERY_KEY });
      const previous = queryClient.getQueryData<HotPick[]>(HOT_PICKS_QUERY_KEY);

      queryClient.setQueryData<HotPick[]>(HOT_PICKS_QUERY_KEY, (old = []) => old.filter((item) => item.id !== id));
      return { previous };
    },
    onError: (_error, _id, context) => {
      if (context?.previous) {
        queryClient.setQueryData(HOT_PICKS_QUERY_KEY, context.previous);
      }
      toast.error('Unable to delete hot pick');
    },
    onSuccess: (response) => {
      toast.success(response.message || 'Hot pick deleted successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: HOT_PICKS_QUERY_KEY });
    },
  });
};
