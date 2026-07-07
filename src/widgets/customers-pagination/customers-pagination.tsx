import { PaginationInfo } from './ui/pagination-info';
import { PaginationNavigation } from './ui/pagination-navigation';
import { PaginationSizeSelect } from './ui/pagination-size-select';

interface CustomersPaginationProps {
  currentPage: number;

  pageSize: number;

  totalItems: number;

  onPageChange(page: number): void;

  onPageSizeChange(size: number): void;
}

export function CustomersPagination({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}: CustomersPaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const from = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const to = Math.min(currentPage * pageSize, totalItems);

  return (
    <section className="mr-2 mb-2 flex items-center justify-between lg:ml-4">
      <PaginationNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <div className="flex items-center gap-2 lg:gap-5">
        <PaginationInfo from={from} to={to} total={totalItems} />

        <PaginationSizeSelect
          value={pageSize}
          onValueChange={onPageSizeChange}
        />
      </div>
    </section>
  );
}
