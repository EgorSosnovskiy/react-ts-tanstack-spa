import {
  formatFraudScore,
  formatTransactionAmount,
  formatTransactionDate,
  formatTransactionType,
  type TransactionListItem,
} from '@/entities/transaction';
import { cn } from '@/shared/lib/utils';

interface TransactionCardProps {
  transaction: TransactionListItem;

  selected: boolean;

  onClick(): void;
}

export function TransactionCard({
  transaction,
  selected,
  onClick,
}: TransactionCardProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          'flex w-full cursor-pointer items-stretch justify-between px-4 pt-3 pb-1 text-left transition-colors',
          selected ? 'bg-[#f8ead2]' : 'bg-[#6b72800d] hover:bg-slate-50',
        )}
      >
        <div className="flex flex-1 justify-between">
          <div className="flex max-w-35 flex-col">
            <p
              className={cn(
                'truncate text-[14px] leading-none font-semibold',
                selected ? 'text-[#2F72D6]' : 'text-black',
              )}
            >
              {transaction.customerName}
            </p>

            <p className="mt-1 text-[13px] text-[#9CA3AF]">
              #{transaction.customerNumber}
            </p>

            <p className="mt-1 text-[13px] tracking-tighter text-[#6B7280]">
              {formatTransactionDate(transaction.createdAt)}
            </p>
          </div>

          <div className="flex flex-col items-end justify-between">
            <span
              className={cn(
                'rounded-xs px-1 text-[12px]',
                selected
                  ? 'bg-white text-[#9CA3AF]'
                  : 'bg-gray-200 text-[#C16A6A]',
              )}
            >
              {formatTransactionType(transaction.type)}
            </span>

            <p className="mb-2 text-[14px] font-semibold text-[#6B7280]">
              {formatTransactionAmount(transaction.amount)}
            </p>
          </div>
        </div>

        <div
          className={cn(
            'ml-2 flex w-9 shrink-0 items-center justify-center rounded-xs text-white',
            formatFraudScore(transaction.fraudScore),
          )}
        >
          <span className="text-[13px] font-light">
            {transaction.fraudScore}
          </span>
        </div>
      </button>
    </li>
  );
}
