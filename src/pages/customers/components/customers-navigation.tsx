import { cn } from '@/shared/lib/utils';

import { Tabs } from '../constants/customers-tabs';

export function CustomersNavigation() {
  return (
    <nav className="bg-muted flex border-b">
      {Tabs.map((item) => (
        <button
          key={item.id}
          type="button"
          className={cn(
            'flex h-14 min-w-47.5 items-center justify-center border-r text-sm transition-colors',

            item.active ? 'bg-background text-primary' : 'hover:bg-muted/70',
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
