import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import { AuthResponse, LoginPayload, RegisterPayload, User } from '@/api/types/auth.types';

export const login = async (payload: LoginPayload) => {
  const { data } = await axiosInstance.post<AuthResponse>(ENDPOINTS.auth.login, payload);
  return data;
};

export const register = async (payload: RegisterPayload) => {
  const { data } = await axiosInstance.post<AuthResponse>(ENDPOINTS.auth.register, payload);
  return data;
};

export const getProfile = async () => {
  const { data } = await axiosInstance.get<User>(ENDPOINTS.auth.profile);
  return data;
};
