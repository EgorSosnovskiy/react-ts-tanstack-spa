import { Logo } from './logo';
import { UserMenu } from './user-menu';

export function AppHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-10">
      <Logo />

      <UserMenu />
    </header>
  );
}
