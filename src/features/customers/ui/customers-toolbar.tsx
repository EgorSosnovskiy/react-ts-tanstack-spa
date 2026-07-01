import type { CustomerFilters } from '@/features/customers/model/customer-filters';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface CustomersToolbarProps {
  filters: CustomerFilters;

  onSearchChange(value: string): void;

  onAccountNumberChange(value: string): void;

  onBalanceChange(value: string): void;
}

export function CustomersToolbar({
  filters,
  onSearchChange,
  onAccountNumberChange,
  onBalanceChange,
}: CustomersToolbarProps) {
  return (
    <section className="bg-muted/40 mb-8 rounded-md px-8 py-7">
      <div className="grid grid-cols-[220px_420px_1fr] items-end gap-10">
        {/* Search */}

        <div className="space-y-3">
          <label htmlFor="search" className="text-sm font-medium">
            Search
          </label>

          <Input
            id="search"
            value={filters.search}
            placeholder="Search"
            className="bg-background h-9 rounded-sm"
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>

        {/* Account */}

        <div className="mx-auto w-90">
          <p className="text-muted-foreground border-b pb-2 text-center text-sm">
            View Customer Account Balance
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="account-id" className="mb-2 block text-sm">
                Acc ID
              </label>

              <Input
                id="account-id"
                value={filters.accountNumber}
                className="h-9 rounded-sm"
                onChange={(event) => onAccountNumberChange(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="balance" className="mb-2 block text-sm">
                Acc Balance
              </label>

              <Input
                id="balance"
                value={filters.balance}
                className="h-9 rounded-sm"
                onChange={(event) => onBalanceChange(event.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Actions */}

        <div className="ml-auto flex flex-col gap-2">
          <div className="flex gap-2">
            <Button>Edit Info</Button>

            <Button variant="outline">Add Customer</Button>
          </div>

          <Button variant="outline">Add Account</Button>
        </div>
      </div>
    </section>
  );
}
