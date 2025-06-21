import { toast } from '@repo/ui/components/sonner';
import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/query-client';

import type { ApiResponse, ApiError, User } from '@/types/api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginRequest): Promise<User> => {
      const response = await apiClient.post<User>('/api/auth/login', data);
      return response;
    },
    onSuccess: (data) => {
      toast.success(`Login success, welcome back ${data.name || data.email}!`);
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Please check your email and password');
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterRequest): Promise<User> => {
      const response = await apiClient.post<ApiResponse<User>>('/api/auth/register', data);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Registration successful, please log in with your new account');
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'An error occurred during registration');
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      await apiClient.post('/api/auth/logout');
    },
    onSuccess: () => {
      toast.info('Logged out');
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
};
