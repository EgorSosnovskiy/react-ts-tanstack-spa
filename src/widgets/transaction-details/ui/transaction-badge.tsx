import {
  formatFraudScore,
  formatTransactionAmount,
  formatTransactionDate,
  formatTransactionType,
  type TransactionListItem,
} from '@/entities/transaction';
import { cn } from '@/shared/lib/utils';

interface TransactionBadgeProps {
  transaction: TransactionListItem;
}

export function TransactionBadge({ transaction }: TransactionBadgeProps) {
  return (
    <section className="flex items-stretch justify-between rounded-xs border border-[#E5E5E5] bg-[#f8ead2] px-4 py-3 shadow-sm">
      <div className="flex gap-3">
        <div
          className={cn(
            'flex w-9 items-center justify-center self-stretch rounded-xs text-[13px] font-light text-white',
            formatFraudScore(transaction.fraudScore),
          )}
        >
          {transaction.fraudScore}
        </div>

        <div className="max-w-30 xl:max-w-none">
          <h2 className="text-[20px] font-bold text-[#1E1E1E] underline underline-offset-2">
            {transaction.customerName}
          </h2>

          <span className="mt-1 text-[14px] text-[#8A8A8A]">
            #{transaction.customerNumber}{' '}
          </span>
          <span className="mt-1 ml-1 text-[14px] text-[#8A8A8A]">
            {formatTransactionDate(transaction.createdAt)}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="rounded-sm bg-white px-1 py-0.5 text-xs text-[#B3B3B3]">
          {formatTransactionType(transaction.type)}
        </span>

        <span className="mt-6 text-[20px] font-bold text-gray-500 xl:mt-0">
          {formatTransactionAmount(transaction.amount)}
        </span>
      </div>
    </section>
  );
}
