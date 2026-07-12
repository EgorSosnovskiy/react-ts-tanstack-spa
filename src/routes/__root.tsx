import { createRootRoute, Outlet } from '@tanstack/react-router';

import { AppLayout } from '@/app/layout';
import { NotFoundPage } from '@/pages/not-found';

export const Route = createRootRoute({
  component: RootComponent,

  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
