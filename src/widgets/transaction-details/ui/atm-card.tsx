import { TransactionMap } from '@/widgets/transaction-map';

import { TransactionDetailCard } from './transaction-detail-card';

interface ATMCardProps {
  latitude: number;
  longitude: number;
  street: string;
}

export function ATMCard({ latitude, longitude, street }: ATMCardProps) {
  return (
    <TransactionDetailCard title="ATM">
      <p className="mb-4 ml-2 text-[15px] leading-6 text-black">{street}</p>

      <div className="mx-2 overflow-hidden rounded-xs border border-[#E5E5E5]">
        <TransactionMap latitude={latitude} longitude={longitude} />
      </div>
    </TransactionDetailCard>
  );
}
