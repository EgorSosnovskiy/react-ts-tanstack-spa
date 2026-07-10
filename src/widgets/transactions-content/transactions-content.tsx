import {
  useTransactionReviewDetails,
  useTransactions,
} from '@/entities/transaction';
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
    return <p>Loading transactions...</p>;
  }

  if (isError) {
    return <p>Failed to load transactions.</p>;
  }

  return (
    <section className="flex flex-1 overflow-hidden">
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
