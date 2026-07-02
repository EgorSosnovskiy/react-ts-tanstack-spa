import { Link } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';

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
      <Link
        to={item.to}
        className="flex h-10 items-center justify-between rounded-sm px-3 text-[15px] font-normal text-white transition-colors hover:bg-white/10"
      >
        {content}
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
