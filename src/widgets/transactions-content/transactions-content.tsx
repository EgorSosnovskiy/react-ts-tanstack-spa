import {
  useTransactionReviewDetails,
  useTransactions,
} from '@/entities/transaction';
import { TransactionPageSkeleton } from '@/shared/ui/skeletons/transaction-page-skeleton';
import { EmptyState, ErrorState } from '@/shared/ui/states';
import { TransactionDetails } from '@/widgets/transaction-details';
import { TransactionsList } from '@/widgets/transactions-list';

import { useSelectedTransaction } from './model/use-selected-transaction';

export function TransactionsContent() {
  const { data: transactions = [], isLoading, isError } = useTransactions();

  const { selectedId, selectTransaction } =
    useSelectedTransaction(transactions);

  const {
    data: transactionDetails,
    isLoading: isTransactionLoading,
    isError: isTransactionError,
  } = useTransactionReviewDetails(selectedId);

  const selectedTransaction = transactions.find((t) => t.id === selectedId);

  if (isLoading) {
    return <TransactionPageSkeleton />;
  }

  if (isError) {
    return <ErrorState message="Unable to load transactions." />;
  }

  if (transactions.length === 0) {
    return <EmptyState title="No transactions found" />;
  }

  return (
    <section className="flex flex-1 flex-col overflow-hidden xl:flex-row">
      <TransactionsList
        transactions={transactions}
        selectedId={selectedId}
        onSelect={selectTransaction}
      />

      <TransactionDetails
        transaction={selectedTransaction}
        details={transactionDetails}
        isLoading={isTransactionLoading}
        isError={isTransactionError}
      />
    </section>
  );
}
