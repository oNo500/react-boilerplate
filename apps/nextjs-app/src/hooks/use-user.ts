import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import type { User } from '@/types/api';

export const useUser = (enabled: boolean = true) => {
  const { data: userData, isLoading } = useQuery({
    enabled: enabled,
    queryKey: ['user'],
    queryFn: async () => apiClient.get<User>('/api/auth/me'),
  });

  return { userData, isLoading };
};
