import * as React from 'react';

import { cn } from '@/shared/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-10 w-full rounded-none border border-[#CFCFCF] bg-white px-3 text-[13px] text-[#222] transition-colors outline-none placeholder:text-[#B8B8B8] focus:border-[#2F80ED] focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
