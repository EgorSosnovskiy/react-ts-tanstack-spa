import type {
  TransactionListItem,
  TransactionReviewDetails,
} from '@/entities/transaction';
import { TransactionDetailsSkeleton } from '@/shared/ui/skeletons/transaction-details-skeleton';
import { ErrorState } from '@/shared/ui/states';

import { AccountCard } from './ui/account-card';
import { ActionButtons } from './ui/action-buttons';
import { ATMCard } from './ui/atm-card';
import { SummaryCard } from './ui/summary-card';
import { TransactionBadge } from './ui/transaction-badge';

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
    return <TransactionDetailsSkeleton />;
  }

  if (isError || !transaction || !details) {
    return (
      <section className="flex flex-1 items-center justify-center">
        <ErrorState message="Unable to load transaction." />;
      </section>
    );
  }

  return (
    <section className="flex-1 overflow-y-auto px-4 py-3">
      <p className="mt-2 mb-2 ml-2 text-[14px] font-medium tracking-wide text-[#2F72D6] uppercase">
        Fraudulent Activity Alert
      </p>

      <TransactionBadge transaction={transaction} />

      <div className="mt-1 grid grid-cols-1 gap-1 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col gap-1">
          <SummaryCard />

          <AccountCard transaction={transaction} details={details} />
        </div>

        <ATMCard
          latitude={details.atmLatitude}
          longitude={details.atmLongitude}
          street={details.atmStreet}
        />
      </div>

      <ActionButtons />
    </section>
  );
}
