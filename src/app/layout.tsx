import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import { AppHeader } from '@/app/header';
import { AppSidebar } from '@/app/sidebar';
import { MobileSidebar } from '@/app/sidebar';
import { Toaster } from '@/shared/ui/sonner';

export function AppLayout({ children }: PropsWithChildren) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-200">
      <AppHeader onOpenMenu={() => setIsMobileSidebarOpen(true)} />

      <MobileSidebar
        open={isMobileSidebarOpen}
        onOpenChange={setIsMobileSidebarOpen}
      />

      <div className="flex min-h-[calc(100vh-72px)]">
        <div className="hidden lg:block">
          <AppSidebar />
        </div>

        <div className="flex-1 overflow-x-auto pt-5">{children}</div>
      </div>
      <Toaster />
    </div>
  );
}
