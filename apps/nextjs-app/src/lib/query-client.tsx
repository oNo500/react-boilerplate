import { type DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
  },
  mutations: {
    retry: false,
  },
};
const ssrQueryConfig: DefaultOptions = {
  queries: {
    staleTime: 0,
    gcTime: 0,
    retry: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: typeof window === 'undefined' ? ssrQueryConfig : queryConfig,
});
