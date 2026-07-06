import type { PropsWithChildren } from 'react';

import { AppHeader } from '@/app/header';
import { AppSidebar } from '@/app/sidebar';
import { Toaster } from '@/shared/ui/sonner';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-200">
      <AppHeader />

      <div className="flex min-h-[calc(100vh-60px)]">
        <AppSidebar />

        <div className="flex-1 overflow-x-auto pt-5">{children}</div>
      </div>
      <Toaster />
    </div>
  );
}
