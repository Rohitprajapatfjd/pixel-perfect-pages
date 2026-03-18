import { axiosInstance } from '@/api/axios';

export const api = {
  get: async <T>(path: string, params?: Record<string, string | number | boolean | undefined>) => {
    const response = await axiosInstance.get<T>(path, { params });
    return response.data;
  },
  post: async <T>(path: string, body?: unknown) => {
    const response = await axiosInstance.post<T>(path, body);
    return response.data;
  },
  put: async <T>(path: string, body?: unknown) => {
    const response = await axiosInstance.put<T>(path, body);
    return response.data;
  },
  patch: async <T>(path: string, body?: unknown) => {
    const response = await axiosInstance.put<T>(path, body);
    return response.data;
  },
  delete: async <T>(path: string) => {
    const response = await axiosInstance.delete<T>(path);
    return response.data;
  },
};
