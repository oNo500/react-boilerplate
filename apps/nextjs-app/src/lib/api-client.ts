import { env } from '@/config/env';

import type { ApiError } from '@/types/api';

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  cookie?: string;
  params?: Record<string, string | number | boolean | undefined | null>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

function buildURLWithParams(url: string, params?: RequestOptions['params']): string {
  if (!params) return url;
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null),
  );
  if (Object.keys(filteredParams).length === 0) return url;
  const queryString = new URLSearchParams(filteredParams as Record<string, string>).toString();
  return `${url}?${queryString}`;
}

export function getServerSideCookies() {
  if (typeof window !== 'undefined') return '';

  // Dynamic import next/headers only on server-side
  return import('next/headers').then(async ({ cookies }) => {
    try {
      const cookieStore = await cookies();
      return cookieStore
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join('; ');
    } catch (error) {
      console.error('Failed to access cookies:', error);
      return '';
    }
  });
}

async function fetchAPI<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body, cookie, params, cache = 'no-store', next } = options;

  // Get cookies from the request when running on server
  let cookieHeader = cookie;
  if (typeof window === 'undefined' && !cookie) {
    cookieHeader = await getServerSideCookies();
  }

  const fullURL = buildURLWithParams(`${env.API_URL}${url}`, params);
  try {
    const response = await fetch(fullURL, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
        ...(cookieHeader ? { Cookie: cookieHeader } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'include',
      cache,
      next,
    });

    if (!response.ok) {
      throw {
        code: response.status.toString(),
        message: response.statusText,
      } as ApiError;
    }
    const responseData = await response.clone().json();
    const { data, error } = responseData;

    if (error) {
      throw error as ApiError;
    }

    return data as T;
  } catch (error) {
    throw error;
  }
}

export const apiClient = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchAPI<T>(url, { ...options, method: 'GET' });
  },
  post<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return fetchAPI<T>(url, { ...options, method: 'POST', body });
  },
  put<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return fetchAPI<T>(url, { ...options, method: 'PUT', body });
  },
  patch<T>(url: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return fetchAPI<T>(url, { ...options, method: 'PATCH', body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchAPI<T>(url, { ...options, method: 'DELETE' });
  },
};
