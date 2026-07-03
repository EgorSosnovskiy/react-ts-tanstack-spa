import { navigation } from '../model/navigation';
import { NavigationItem } from './navigation-item';

export function AppSidebar() {
  return (
    <aside className="w-60 bg-[#1b79cb] text-white shadow-[2px_0_8px_rgba(15,23,42,0.08)]">
      <div className="px-5 pt-7 pb-5">
        <p className="text-[16px] text-blue-300">Fraud Management</p>
      </div>

      <nav className="space-y-0.5 px-5">
        {navigation.map((item) => (
          <NavigationItem key={item.label} item={item} />
        ))}
      </nav>
    </aside>
  );
}
