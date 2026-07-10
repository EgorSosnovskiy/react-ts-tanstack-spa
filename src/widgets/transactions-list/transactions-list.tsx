import type { TransactionListItem } from '@/entities/transaction';

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
    <aside className="w-80 border-r border-gray-200">
      <ul className="flex flex-col">
        {transactions.map((transaction) => {
          const isSelected = transaction.id === selectedId;

          return (
            <li
              key={transaction.id}
              onClick={() => onSelect(transaction.id)}
              className={`cursor-pointer border-b p-4 transition-colors ${
                isSelected ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <div className="font-medium">{transaction.customerName}</div>

              <div className="text-sm text-gray-500">
                #{transaction.customerNumber}
              </div>

              <div className="mt-2">{transaction.type}</div>

              <div>${transaction.amount}</div>

              <div>Fraud score: {transaction.fraudScore}</div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
