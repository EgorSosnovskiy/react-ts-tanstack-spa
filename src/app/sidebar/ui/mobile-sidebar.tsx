import { Sheet, SheetContent } from '@/shared/ui/sheet';

import { AppSidebar } from './sidebar';

interface MobileSidebarProps {
  open: boolean;

  onOpenChange(open: boolean): void;

  onOpenHelp(): void;
}

export function MobileSidebar({
  open,
  onOpenChange,
  onOpenHelp,
}: MobileSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-60 border-r-0 bg-transparent p-0">
        <AppSidebar collapsed={false} onOpenHelp={onOpenHelp} />
      </SheetContent>
    </Sheet>
  );
}
