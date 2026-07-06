import { useState } from 'react';

import { useCustomers } from '@/entities/customer';
import { CustomerAddSheet } from '@/features/customers/customer-add';
import { CustomerAddAccountSheet } from '@/features/customers/customer-add-account';
import { CustomerEditSheet } from '@/features/customers/customer-edit';
import { scrollToTop } from '@/shared/lib/scroll';
import { CustomersTableSkeleton } from '@/shared/ui/skeletons/customers-table-skeleton';
import { EmptyState, ErrorState } from '@/shared/ui/states';
import { TooltipProvider } from '@/shared/ui/tooltip';
import { CustomersPagination } from '@/widgets/customers-pagination';
import { CustomersTable } from '@/widgets/customers-table';
import { CustomersToolbar } from '@/widgets/customers-toolbar';

import { useCustomersFilters } from './model/use-customers-filters';

export function CustomersContent() {
  const {
    filters,
    page,
    pageSize,
    setPage,
    setPageSize,
    updateFilter,
    debouncedSearch,
  } = useCustomersFilters();

  const { data, isLoading, isError } = useCustomers({
    page,
    pageSize,
    search: debouncedSearch,
    accountNumber: filters.accountNumber,
    balance: filters.balance,
  });

  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(
    null,
  );
  const selectedCustomer =
    data?.customers.find((customer) => customer.id === selectedCustomerId) ??
    null;

  const [isEditSheetOpen, setIsEditSheetOpen] = useState(false);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);
  const [isAddAccountOpen, setIsAddAccountOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <CustomersToolbar
          filters={filters}
          selectedCustomer={selectedCustomer}
          onEditCustomer={() => setIsEditSheetOpen(true)}
          onAddCustomer={() => setIsAddSheetOpen(true)}
          onAddAccount={() => setIsAddAccountOpen(true)}
          addAccountDisabled={
            !selectedCustomer || selectedCustomer.balance !== null
          }
          onSearchChange={(value) => updateFilter('search', value)}
          onAccountNumberChange={(value) =>
            updateFilter('accountNumber', value)
          }
          onBalanceChange={(value) => updateFilter('balance', value)}
        />
      </TooltipProvider>

      {isLoading ? (
        <CustomersTableSkeleton />
      ) : isError || !data ? (
        <ErrorState message="Unable to load customers. Please try again later." />
      ) : data.customers.length === 0 ? (
        <EmptyState title="No customers found" />
      ) : (
        <>
          <CustomersTable
            customers={data.customers}
            selectedCustomerId={selectedCustomerId}
            onSelectCustomer={setSelectedCustomerId}
          />

          <CustomersPagination
            currentPage={page}
            pageSize={pageSize}
            totalItems={data.total}
            onPageChange={(page) => {
              setPage(page);
              scrollToTop();
            }}
            onPageSizeChange={(size) => {
              setPage(1);
              setPageSize(size);
              scrollToTop();
            }}
          />
          <CustomerEditSheet
            customer={selectedCustomer}
            open={isEditSheetOpen}
            onOpenChange={setIsEditSheetOpen}
          />
          <CustomerAddSheet
            open={isAddSheetOpen}
            onOpenChange={setIsAddSheetOpen}
          />
          <CustomerAddAccountSheet
            customer={selectedCustomer}
            open={isAddAccountOpen}
            onOpenChange={setIsAddAccountOpen}
          />
        </>
      )}
    </>
  );
}
