import { navigation } from '../model/navigation';
import { NavigationItem } from './navigation-item';

export function AppSidebar() {
  return (
    <aside className="w-64 bg-[#0F4C81] text-white">
      <div className="px-6 py-8">
        <p className="mb-6 px-6 text-xs font-medium tracking-widest text-blue-200 uppercase">
          Fraud Management
        </p>
      </div>

      <nav className="space-y-1 px-3">
        {navigation.map((item) => (
          <NavigationItem key={item.label} item={item} />
        ))}
      </nav>
    </aside>
  );
}
