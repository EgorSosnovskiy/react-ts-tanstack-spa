import { Search } from 'lucide-react';

import type { Customer } from '@/entities/customer';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';
import type { CustomerFilters } from '@/widgets/customers-content';

interface CustomersToolbarProps {
  filters: CustomerFilters;

  selectedCustomer: Customer | null;

  onEditCustomer(): void;

  onAddCustomer(): void;

  onAddAccount(): void;

  addAccountDisabled: boolean;

  onSearchChange(value: string): void;

  onAccountNumberChange(value: string): void;

  onBalanceChange(value: string): void;
}

export function CustomersToolbar({
  filters,
  selectedCustomer,
  onEditCustomer,
  onAddCustomer,
  onAddAccount,
  addAccountDisabled,
  onSearchChange,
  onAccountNumberChange,
  onBalanceChange,
}: CustomersToolbarProps) {
  const addAccountTooltip = !selectedCustomer
    ? 'Select a customer'
    : selectedCustomer.balance !== null
      ? 'Customer already has an account'
      : null;
  return (
    <section className="bg-[#f5f5f596] px-16 py-5">
      <div className="grid grid-cols-[240px_1fr_240px] items-center gap-8">
        {/* Search */}

        <div className="flex items-center">
          <div className="relative w-60">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <Input
              id="search"
              value={filters.search}
              placeholder="Search"
              className="h-10 rounded-none border-2 border-slate-300 bg-white pr-3 pl-9 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:ring-0"
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>
        </div>

        {/* Account */}

        <div className="mx-auto flex w-140 flex-col">
          <p className="mb-3 border-b border-slate-300 pb-2 text-center text-[14px] font-normal tracking-wider text-slate-400">
            View Customer Account Balance
          </p>

          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <label
                htmlFor="account-id"
                className="text-[15px] text-slate-900"
              >
                Acc ID
              </label>

              <Input
                id="account-id"
                value={filters.accountNumber}
                className="h-10 w-45 rounded-none border-2 border-slate-300 bg-white text-right text-[13px] shadow-none focus-visible:ring-0"
                onChange={(event) => onAccountNumberChange(event.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="balance" className="text-[15px] text-slate-900">
                Acc Balance
              </label>

              <Input
                id="balance"
                value={filters.balance}
                className="h-10 w-45 rounded-none border-2 border-slate-300 bg-white text-right text-[13px] shadow-none focus-visible:ring-0"
                onChange={(event) => onBalanceChange(event.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Actions */}

        <div className="ml-auto flex items-start gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline-block">
                <Button disabled={!selectedCustomer} onClick={onEditCustomer}>
                  Edit Info
                </Button>
              </span>
            </TooltipTrigger>

            {!selectedCustomer && (
              <TooltipContent>Select a customer to edit</TooltipContent>
            )}
          </Tooltip>

          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="h-10 w-34"
              onClick={onAddCustomer}
            >
              Add Customer
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-block">
                  <Button
                    variant="outline"
                    className="h-10 w-34"
                    onClick={onAddAccount}
                    disabled={addAccountDisabled}
                  >
                    Add Account
                  </Button>
                </span>
              </TooltipTrigger>

              {addAccountTooltip && (
                <TooltipContent>{addAccountTooltip}</TooltipContent>
              )}
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
