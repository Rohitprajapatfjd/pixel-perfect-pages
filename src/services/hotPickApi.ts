import { axiosInstance } from '@/api/axios';
import type { ApiListResponse, HotPick, HotPickPayload } from '@/types/hotPick';

const HOT_PICKS_BASE = '/api/hot-picks';

export const hotPickApi = {
  async getAll() {
    const response = await axiosInstance.get<ApiListResponse<HotPick[]>>(HOT_PICKS_BASE);
    return response.data;
  },
  async create(payload: HotPickPayload) {
    const response = await axiosInstance.post<ApiListResponse<HotPick>>(HOT_PICKS_BASE, payload);
    return response.data;
  },
  async update(id: string, payload: HotPickPayload) {
    const response = await axiosInstance.put<ApiListResponse<HotPick>>(`${HOT_PICKS_BASE}/${id}`, payload);
    return response.data;
  },
  async remove(id: string) {
    const response = await axiosInstance.delete<ApiListResponse<null>>(`${HOT_PICKS_BASE}/${id}`);
    return response.data;
  },
};
