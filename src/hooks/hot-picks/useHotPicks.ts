import { useQuery } from '@tanstack/react-query';
import { hotPickApi } from '@/services/hotPickApi';

export const HOT_PICKS_QUERY_KEY = ['hot-picks'];

export const useHotPicks = () =>
  useQuery({
    queryKey: HOT_PICKS_QUERY_KEY,
    queryFn: hotPickApi.getAll,
    select: (response) => response.data,
  });
