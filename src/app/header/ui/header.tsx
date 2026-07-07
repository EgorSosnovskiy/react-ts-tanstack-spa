import { Logo } from './logo';
import { MobileMenuButton } from './mobile-menu-button';
import { UserMenu } from './user-menu';

interface AppHeaderProps {
  onOpenMenu(): void;
}

export function AppHeader({ onOpenMenu }: AppHeaderProps) {
  return (
    <header className="flex h-18 items-center justify-between bg-white shadow-[0_6px_12px_rgba(15,23,42,0.2)] lg:px-8">
      <div className="flex items-center gap-3">
        <MobileMenuButton onClick={onOpenMenu} />

        <Logo />
      </div>

      <UserMenu />
    </header>
  );
}
