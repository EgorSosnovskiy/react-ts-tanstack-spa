import { TransactionDetailCard } from './transaction-detail-card';
import { TransactionDetailRow } from './transaction-detail-row';

export function SummaryCard() {
  return (
    <TransactionDetailCard title="Summary" contentClassName="ml-5">
      <dl className="space-y-3">
        <TransactionDetailRow label="Payment">
          <span className="rounded-xs border-2 border-[#7FB2FF] px-0.5 py-px text-[10px] font-semibold text-[#7FB2FF]">
            VISA
          </span>
        </TransactionDetailRow>

        <TransactionDetailRow label="CVV Response">
          <span className="font-medium text-[#4CAF50]">CVV2 Match (M)</span>
        </TransactionDetailRow>

        <TransactionDetailRow label="AVS Response">
          <span className="font-medium text-[#4CAF50]">Full Match (Y)</span>
        </TransactionDetailRow>

        <TransactionDetailRow label="Number">
          5237 55xx xxxx
        </TransactionDetailRow>

        <TransactionDetailRow label="Bank">
          AMERICAN EXPRESS INTERNATIONAL (NZ) INC.
        </TransactionDetailRow>
      </dl>
    </TransactionDetailCard>
  );
}
