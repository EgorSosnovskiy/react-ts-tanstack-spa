import { Link } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

import type { NavigationLink as NavigationItemModel } from '../model/navigation';

interface NavigationItemProps {
  item: NavigationItemModel;
}

export function NavigationItem({ item }: NavigationItemProps) {
  const Icon = item.icon;

  const content = (
    <>
      <div className="flex items-center gap-3">
        <Icon className="text-blue-300" size={16} strokeWidth={2} />
        <span>{item.label}</span>
      </div>

      {item.hasChildren && <ChevronDown size={14} strokeWidth={2} />}
    </>
  );

  if (item.to) {
    return (
      <Link to={item.to} activeOptions={{ exact: true, includeSearch: false }}>
        {({ isActive }) => (
          <div
            className={cn(
              'flex h-10 items-center justify-between rounded-sm border-l-4 px-3 transition-colors',
              isActive
                ? 'border-white bg-white/12'
                : 'border-transparent hover:bg-white/10',
            )}
          >
            <div className="flex items-center gap-3">
              <Icon
                size={16}
                className={isActive ? 'text-white' : 'text-blue-300'}
              />

              <span>{item.label}</span>
            </div>

            {item.hasChildren && <ChevronDown size={14} />}
          </div>
        )}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="flex h-10 w-full items-center justify-between rounded-sm px-3 text-[15px] font-normal text-white transition-colors hover:bg-white/10"
    >
      {content}
    </button>
  );
}
