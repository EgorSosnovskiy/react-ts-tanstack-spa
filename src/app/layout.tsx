import type { PropsWithChildren } from 'react';

import { AppHeader } from '@/app/header';
import { AppSidebar } from '@/app/sidebar';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-100">
      <AppHeader />

      <div className="flex">
        <AppSidebar />

        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
}
