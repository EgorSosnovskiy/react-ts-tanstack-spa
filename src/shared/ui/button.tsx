import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer whitespace-nowrap rounded-none text-[13px] font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-[#2F80ED] bg-[#2F80ED] text-white hover:bg-[#1f6fdb]',

        outline:
          'border border-[#2F80ED] bg-white text-[#2F80ED] hover:bg-[#F8FAFD]',

        secondary:
          'border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200',

        ghost: 'hover:bg-slate-100',

        destructive: 'bg-red-500 text-white hover:bg-red-600',

        link: 'text-[#2F80ED] underline-offset-4 hover:underline',
      },

      size: {
        default: 'h-9 px-8',

        xs: 'h-7 px-3',

        sm: 'h-8 px-4',

        lg: 'h-10 px-10',

        icon: 'h-9 w-9',

        'icon-xs': 'h-7 w-7',

        'icon-sm': 'h-8 w-8',

        'icon-lg': 'h-10 w-10',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
