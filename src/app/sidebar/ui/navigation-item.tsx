import { Link } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

import type { NavigationLink as NavigationItemModel } from '../model/navigation';

interface NavigationItemProps {
  item: NavigationItemModel;
  collapsed?: boolean;
  onOpenHelp(): void;
}

export function NavigationItem({
  item,
  collapsed = false,
  onOpenHelp,
}: NavigationItemProps) {
  const Icon = item.icon;

  if (item.to) {
    return (
      <Link to={item.to} activeOptions={{ exact: true, includeSearch: false }}>
        {({ isActive }) => (
          <div
            className={cn(
              'flex h-9 items-center rounded-sm border-l-4 transition-colors',
              collapsed ? 'justify-center px-4' : 'justify-between px-3',
              isActive
                ? 'border-white bg-white/12'
                : 'border-transparent hover:bg-white/10',
            )}
          >
            <div className="flex items-center gap-3">
              <Icon
                size={16}
                strokeWidth={2}
                className={
                  isActive || collapsed ? 'text-white' : 'text-blue-300'
                }
              />

              {!collapsed && <span>{item.label}</span>}
            </div>

            {item.hasChildren && !collapsed && (
              <ChevronDown size={14} strokeWidth={2} />
            )}
          </div>
        )}
      </Link>
    );
  }

  if (item.action === 'help') {
    return (
      <button
        type="button"
        onClick={onOpenHelp}
        className={cn(
          'flex h-8 w-full cursor-pointer items-center rounded-sm text-[15px] font-normal text-white transition-colors hover:bg-white/10',
          collapsed ? 'justify-center px-0' : 'justify-between px-3',
        )}
      >
        <div className="flex items-center gap-3">
          <Icon
            size={16}
            strokeWidth={2}
            className={collapsed ? 'text-white' : 'text-blue-300'}
          />

          {!collapsed && <span>{item.label}</span>}
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        'flex h-8 w-full items-center rounded-sm text-[15px] font-normal text-white transition-colors hover:bg-white/10',
        collapsed ? 'justify-center px-0' : 'justify-between px-3',
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={16}
          strokeWidth={2}
          className={collapsed ? 'text-white' : 'text-blue-300'}
        />

        {!collapsed && <span>{item.label}</span>}
      </div>

      {item.hasChildren && !collapsed && (
        <ChevronDown size={14} strokeWidth={2} />
      )}
    </button>
  );
}
