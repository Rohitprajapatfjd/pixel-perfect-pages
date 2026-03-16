import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, login, register } from '@/api/auth.api';
import { LoginPayload, RegisterPayload } from '@/api/types/auth.types';
import { tokenStorage } from '@/utils/tokenStorage';

export const AUTH_QUERY_KEYS = {
  profile: ['auth', 'profile'] as const,
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (response) => {
      tokenStorage.set(response.token);
      queryClient.setQueryData(AUTH_QUERY_KEYS.profile, response.user);
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: (response) => {
      tokenStorage.set(response.token);
      queryClient.setQueryData(AUTH_QUERY_KEYS.profile, response.user);
    },
  });
};

export const useProfileQuery = () =>
  useQuery({
    queryKey: AUTH_QUERY_KEYS.profile,
    queryFn: getProfile,
    enabled: Boolean(tokenStorage.get()),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
