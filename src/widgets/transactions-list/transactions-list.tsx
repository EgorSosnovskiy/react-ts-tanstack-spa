import type { TransactionListItem } from '@/entities/transaction';

import { TransactionCard } from './ui/transaction-card';

interface TransactionsListProps {
  transactions: TransactionListItem[];

  selectedId?: string;

  onSelect: (id: string) => void;
}

export function TransactionsList({
  transactions,
  selectedId,
  onSelect,
}: TransactionsListProps) {
  return (
    <aside className="flex w-full flex-col border-b border-gray-300 bg-gray-100 pt-6 xl:h-full xl:w-75 xl:border-b-0 xl:border-l">
      <ul className="flex max-h-60 flex-1 flex-col gap-1 overflow-y-auto xl:max-h-none">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            selected={transaction.id === selectedId}
            onClick={() => onSelect(transaction.id)}
          />
        ))}
      </ul>
    </aside>
  );
}
