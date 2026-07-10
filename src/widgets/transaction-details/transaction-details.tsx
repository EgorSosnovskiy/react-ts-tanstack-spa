import type {
  TransactionListItem,
  TransactionReviewDetails,
} from '@/entities/transaction';
import { TransactionMap } from '@/widgets/transaction-map';

interface TransactionDetailsProps {
  transaction?: TransactionListItem;

  details?: TransactionReviewDetails;

  isLoading: boolean;

  isError: boolean;
}

export function TransactionDetails({
  transaction,
  details,
  isLoading,
  isError,
}: TransactionDetailsProps) {
  if (isLoading) {
    return (
      <section className="flex flex-1 items-center justify-center">
        Loading transaction...
      </section>
    );
  }

  if (isError || !transaction || !details) {
    return (
      <section className="flex flex-1 items-center justify-center">
        Failed to load transaction.
      </section>
    );
  }

  return (
    <section className="flex flex-1 flex-col gap-3 p-6">
      <h2 className="text-xl font-semibold">Transaction Details</h2>

      <div>
        <strong>Customer:</strong> {transaction.customerName}
      </div>

      <div>
        <strong>Customer Number:</strong> #{transaction.customerNumber}
      </div>

      <div>
        <strong>Account Number:</strong> {details.accountNumber}
      </div>

      <div>
        <strong>Type:</strong> {transaction.type}
      </div>

      <div>
        <strong>Amount:</strong> ${transaction.amount}
      </div>

      <div>
        <strong>Fraud Score:</strong> {transaction.fraudScore}
      </div>

      <div>
        <strong>Created At:</strong> {transaction.createdAt}
      </div>

      <div>
        <strong>Latitude:</strong> {details.atmLatitude}
      </div>

      <div>
        <strong>Longitude:</strong> {details.atmLongitude}
      </div>

      <TransactionMap
        latitude={details?.atmLatitude}
        longitude={details?.atmLongitude}
      />
    </section>
  );
}
