import { useCustomers } from '@/entities/customer';
import { scrollToTop } from '@/shared/lib/scroll';
import { CustomersTableSkeleton } from '@/shared/ui/skeletons/customers-table-skeleton';
import { EmptyState } from '@/shared/ui/states';
import { ErrorState } from '@/shared/ui/states/error-state';
import { CustomersPagination } from '@/widgets/customers-pagination';
import { CustomersTable } from '@/widgets/customers-table';

import { useCustomersFilters } from '../model/use-customers-filters';
import { CustomersToolbar } from './customers-toolbar';

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

  return (
    <>
      <CustomersToolbar
        filters={filters}
        onSearchChange={(value) => updateFilter('search', value)}
        onAccountNumberChange={(value) => updateFilter('accountNumber', value)}
        onBalanceChange={(value) => updateFilter('balance', value)}
      />

      {isLoading ? (
        <CustomersTableSkeleton />
      ) : isError || !data ? (
        <ErrorState message="Unable to load customers. Please try again later." />
      ) : data.customers.length === 0 ? (
        <EmptyState title="No customers found" />
      ) : (
        <>
          <CustomersTable customers={data.customers} />

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
        </>
      )}
    </>
  );
}
