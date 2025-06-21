import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router';

import { ErrorFallback } from '@/components/errors/error-fallback';

const RouterErrorBoundary = () => {
  const error = useRouteError();
  return <ErrorFallback error={error} resetErrorBoundary={() => window.location.reload()} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: RouterErrorBoundary,
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/home')).default,
    }),
  },
  {
    path: '/login',
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/login')).default,
    }),
  },
  {
    path: '/register',
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/register')).default,
    }),
  },
  {
    path: '*',
    HydrateFallback: () => null,
    lazy: async () => ({
      Component: (await import('@/app/routes/not-found')).default,
    }),
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
