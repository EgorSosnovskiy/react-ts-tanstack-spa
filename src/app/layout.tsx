import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import { useRouterState } from '@tanstack/react-router';

import { AppHeader } from '@/app/header';
import { AppSidebar } from '@/app/sidebar';
import { MobileSidebar } from '@/app/sidebar';
import { Toaster } from '@/shared/ui/sonner';
import { HelpChat } from '@/widgets/help-chat';

export function AppLayout({ children }: PropsWithChildren) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isHelpChatOpen, setIsHelpChatOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isSidebarCollapsed = pathname === '/transactions';
  return (
    <div className="min-h-screen bg-gray-200">
      <AppHeader onOpenMenu={() => setIsMobileSidebarOpen(true)} />

      <MobileSidebar
        open={isMobileSidebarOpen}
        onOpenChange={setIsMobileSidebarOpen}
        onOpenHelp={() => setIsHelpChatOpen(true)}
      />

      <div className="relative z-10 flex min-h-[calc(100vh-72px)] flex-1">
        <div className="hidden lg:block">
          <AppSidebar
            collapsed={isSidebarCollapsed}
            onOpenHelp={() => setIsHelpChatOpen(true)}
          />
        </div>

        <div className="min-h-0 flex-1 overflow-auto">{children}</div>
      </div>
      <HelpChat open={isHelpChatOpen} onOpenChange={setIsHelpChatOpen} />
      <Toaster />
    </div>
  );
}
