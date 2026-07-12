import { navigation } from '../model/navigation';
import { NavigationItem } from './navigation-item';

interface AppSidebarProps {
  collapsed?: boolean;
}

export function AppSidebar({ collapsed = false }: AppSidebarProps) {
  return (
    <aside
      className={
        collapsed
          ? 'h-full w-16 bg-[#1b79cb] text-white shadow-[2px_0_8px_rgba(15,23,42,0.08)] transition-all duration-200'
          : 'h-full w-60 bg-[#1b79cb] text-white shadow-[2px_0_8px_rgba(15,23,42,0.08)] transition-all duration-200'
      }
    >
      {!collapsed && (
        <div className="px-5 pt-7 pb-5">
          <p className="text-[16px] text-blue-300">Fraud Management</p>
        </div>
      )}

      <nav
        className={
          collapsed
            ? 'flex flex-col items-center gap-2 py-6'
            : 'space-y-0.5 px-5'
        }
      >
        {navigation.map((item) => (
          <NavigationItem key={item.label} item={item} collapsed={collapsed} />
        ))}
      </nav>
    </aside>
  );
}
