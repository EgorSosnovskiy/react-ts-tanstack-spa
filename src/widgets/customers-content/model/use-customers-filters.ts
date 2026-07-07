import { useCallback, useState } from 'react';

import { useDebounce } from '@/shared/lib/hooks/use-debounce';

import type { CustomerFilters } from './customer-filters';

export function useCustomersFilters() {
  const [filters, setFilters] = useState<CustomerFilters>({
    search: '',
    accountNumber: '',
    balance: '',
  });

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const debouncedSearch = useDebounce(filters.search, 400);

  const updateFilter = useCallback(
    <K extends keyof CustomerFilters>(key: K, value: CustomerFilters[K]) => {
      setPage(1);
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  return {
    filters,
    page,
    pageSize,
    setPage,
    setPageSize,
    updateFilter,
    debouncedSearch,
  };
}
