import { Input } from '@/shared/ui/input';

interface AccountFiltersProps {
  accountNumber: string;

  balance: string;

  onAccountNumberChange(value: string): void;

  onBalanceChange(value: string): void;
}

export function AccountFilters({
  accountNumber,
  balance,
  onAccountNumberChange,
  onBalanceChange,
}: AccountFiltersProps) {
  return (
    <div className="mx-auto flex w-full flex-col 2xl:w-140">
      <p className="mb-3 border-b border-slate-300 pb-2 text-center text-[14px] font-normal tracking-wider text-slate-400">
        View Customer Account Balance
      </p>

      <div className="flex items-center justify-center gap-8 2xl:justify-between">
        <div className="flex items-center gap-3">
          <label htmlFor="account-id" className="text-[15px] text-slate-900">
            Acc ID
          </label>

          <Input
            id="account-id"
            value={accountNumber}
            className="h-10 flex-1 rounded-none border-2 border-slate-300 bg-white text-right text-[13px] shadow-none focus-visible:ring-0 2xl:w-45"
            onChange={(event) => onAccountNumberChange(event.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="balance" className="text-[15px] text-slate-900">
            Acc Balance
          </label>

          <Input
            id="balance"
            value={balance}
            className="h-10 flex-1 rounded-none border-2 border-slate-300 bg-white text-right text-[13px] shadow-none focus-visible:ring-0 2xl:w-45"
            onChange={(event) => onBalanceChange(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
