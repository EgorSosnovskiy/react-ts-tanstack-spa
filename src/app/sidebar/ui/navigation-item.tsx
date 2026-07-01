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
        <Icon size={18} />
        <span>{item.label}</span>
      </div>

      {item.hasChildren && <ChevronDown size={16} />}
    </>
  );

  if (item.to) {
    return (
      <Link
        to={item.to}
        className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
    >
      {content}
    </button>
  );
}
