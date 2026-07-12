import {
  formatTransactionDate,
  type TransactionListItem,
  type TransactionReviewDetails,
} from '@/entities/transaction';

import { TransactionDetailCard } from './transaction-detail-card';
import { TransactionDetailRow } from './transaction-detail-row';

interface AccountCardProps {
  transaction: TransactionListItem;
  details: TransactionReviewDetails;
}

export function AccountCard({ transaction, details }: AccountCardProps) {
  return (
    <TransactionDetailCard title="Account" contentClassName="ml-5">
      <dl className="space-y-3">
        <TransactionDetailRow label="Number">
          {details.accountNumber}
        </TransactionDetailRow>

        <TransactionDetailRow label="Order Amount">
          <span className="font-medium">${transaction.amount.toFixed(2)}</span>
        </TransactionDetailRow>

        <TransactionDetailRow label="Creation Date">
          {formatTransactionDate(transaction.createdAt)}
        </TransactionDetailRow>

        <TransactionDetailRow label="Update Date">
          {formatTransactionDate(transaction.createdAt)}
        </TransactionDetailRow>

        <TransactionDetailRow label="Last Order Ext. ID">
          {transaction.id.slice(0, 12)}
        </TransactionDetailRow>
      </dl>
    </TransactionDetailCard>
  );
}
