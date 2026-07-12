import type { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/utils';

interface TransactionDetailCardProps extends PropsWithChildren {
  title: string;

  className?: string;

  contentClassName?: string;
}

export function TransactionDetailCard({
  title,
  children,
  className,
  contentClassName,
}: TransactionDetailCardProps) {
  return (
    <section
      className={cn('rounded-xs border bg-gray-50 shadow-sm', className)}
    >
      <header className="px-5 pt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-medium text-[#222]">{title}</h3>
        </div>

        <div className="mt-1 h-px bg-[#a6c6fe]" />
      </header>

      <div className={cn('p-3', contentClassName)}>{children}</div>
    </section>
  );
}
