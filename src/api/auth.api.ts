import { axiosInstance } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import {
  AuthResponse,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
  ResetPasswordPayload,
  User,
} from '@/api/types/auth.types';

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

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const { data } = await axiosInstance.post(ENDPOINTS.auth.forgotPassword, payload);
  return data;
};

export const resetPassword = async (payload: ResetPasswordPayload) => {
  const { data } = await axiosInstance.post(ENDPOINTS.auth.resetPassword, payload);
  return data;
};
