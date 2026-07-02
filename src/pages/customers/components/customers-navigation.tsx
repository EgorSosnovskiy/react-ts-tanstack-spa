import { cn } from '@/shared/lib/utils';

import { Tabs } from '../constants/customers-tabs';

export function CustomersNavigation() {
  return (
    <nav className="flex w-full">
      {Tabs.map((item) => (
        <button
          key={item.id}
          type="button"
          className={cn(
            'flex h-12 flex-1 items-center justify-center text-[14px] font-medium transition-colors last:border-r-0',

            item.isActive
              ? 'border-t-2 border-r border-slate-300 bg-white text-[#2F80ED]'
              : 'border-b border-slate-300 bg-gray-200 text-slate-600 hover:bg-slate-100',
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
