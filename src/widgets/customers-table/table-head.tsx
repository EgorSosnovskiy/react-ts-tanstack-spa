import { ChevronDown } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

interface CustomersTableHeadProps {
  title: string;
  align?: 'left' | 'right';
}

export function CustomersTableHead({
  title,
  align = 'left',
}: CustomersTableHeadProps) {
  return (
    <div
      className={cn(
        'flex items-center',
        align === 'right' ? 'justify-end gap-1' : 'justify-between',
      )}
    >
      <span>{title}</span>

      <ChevronDown size={12} className="text-[#B8B8B8]" />
    </div>
  );
}
