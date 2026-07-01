import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

import { getPaginationPages } from '../model/pagination.utils';

interface PaginationNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationNavigation({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationNavigationProps) {
  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="hover:bg-muted flex h-6 w-6 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`} className="text-muted-foreground px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={cn(
              'text-sm transition-colors',

              page === currentPage
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="hover:bg-muted flex h-8 w-8 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
