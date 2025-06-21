import axios, { type InternalAxiosRequestConfig } from 'axios';

import { authStore } from '@/auth/auth-store';
import { env } from '@/config/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  config.headers = config.headers || {};

  config.headers.Accept = 'application/json';

  const token = authStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.withCredentials = true;
  return config;
}

export const apiClient = axios.create({
  baseURL: env.API_URL,
});

apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get('redirectTo') || window.location.pathname;
      // window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
  },
);
