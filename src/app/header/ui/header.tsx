import { Logo } from './logo';
import { UserMenu } from './user-menu';

export function AppHeader() {
  return (
    <header className="flex h-18 items-center justify-between bg-white px-8 shadow-[0_6px_12px_rgba(15,23,42,0.2)]">
      <Logo />

      <UserMenu />
    </header>
  );
}
