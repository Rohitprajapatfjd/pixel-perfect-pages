import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { hotPickApi } from '@/services/hotPickApi';
import type { HotPick, HotPickPayload } from '@/types/hotPick';
import { HOT_PICKS_QUERY_KEY } from './useHotPicks';

export const useCreateHotPick = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: HotPickPayload) => hotPickApi.create(payload),
    onMutate: async (payload) => {
      await queryClient.cancelQueries({ queryKey: HOT_PICKS_QUERY_KEY });
      const previous = queryClient.getQueryData<HotPick[]>(HOT_PICKS_QUERY_KEY);
      const optimistic: HotPick = { ...payload, id: `temp-${Date.now()}` };

      queryClient.setQueryData<HotPick[]>(HOT_PICKS_QUERY_KEY, (old = []) => [optimistic, ...old]);
      return { previous };
    },
    onError: (_error, _payload, context) => {
      if (context?.previous) {
        queryClient.setQueryData(HOT_PICKS_QUERY_KEY, context.previous);
      }
      toast.error('Unable to create hot pick');
    },
    onSuccess: (response) => {
      toast.success(response.message || 'Hot pick created successfully');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: HOT_PICKS_QUERY_KEY });
    },
  });
};
