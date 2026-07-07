import type { Customer } from '@/entities/customer';
import type { CustomerFilters } from '@/widgets/customers-content';

import { AccountFilters } from './ui/account-filters';
import { SearchSection } from './ui/search-section';
import { ToolbarActions } from './ui/toolbar-actions';

interface CustomersToolbarProps {
  filters: CustomerFilters;

  selectedCustomer: Customer | null;

  addAccountDisabled: boolean;

  onEditCustomer(): void;

  onAddCustomer(): void;

  onAddAccount(): void;

  onSearchChange(value: string): void;

  onAccountNumberChange(value: string): void;

  onBalanceChange(value: string): void;
}

export function CustomersToolbar({
  filters,
  selectedCustomer,
  addAccountDisabled,
  onEditCustomer,
  onAddCustomer,
  onAddAccount,
  onSearchChange,
  onAccountNumberChange,
  onBalanceChange,
}: CustomersToolbarProps) {
  return (
    <section className="bg-[#f5f5f596] px-4 py-5 2xl:px-16">
      <div className="grid grid-cols-1 items-center gap-8 2xl:grid-cols-[240px_1fr_240px] 2xl:items-center">
        <SearchSection value={filters.search} onChange={onSearchChange} />

        <AccountFilters
          accountNumber={filters.accountNumber}
          balance={filters.balance}
          onAccountNumberChange={onAccountNumberChange}
          onBalanceChange={onBalanceChange}
        />

        <ToolbarActions
          selectedCustomer={selectedCustomer}
          addAccountDisabled={addAccountDisabled}
          onEditCustomer={onEditCustomer}
          onAddCustomer={onAddCustomer}
          onAddAccount={onAddAccount}
        />
      </div>
    </section>
  );
}
