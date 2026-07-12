import type { ReactNode } from 'react';

interface TransactionDetailRowProps {
  label: string;

  children: ReactNode;
}

export function TransactionDetailRow({
  label,
  children,
}: TransactionDetailRowProps) {
  return (
    <div className="grid grid-cols-[120px_1fr] items-center">
      <dt className="text-right text-[14px] text-gray-500">{label}</dt>

      <dd className="pl-6 text-[14px] font-medium text-black">{children}</dd>
    </div>
  );
}
