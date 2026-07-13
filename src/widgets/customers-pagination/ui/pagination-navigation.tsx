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
    <nav aria-label="Pagination" className="flex items-center gap-2 lg:gap-7">
      <button
        type="button"
        disabled={currentPage === 1}
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-6 w-6 cursor-pointer items-center justify-center text-[#2F80ED] transition-colors hover:text-[#1F6FDB] disabled:pointer-events-none disabled:text-slate-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`} className="px-1 text-[13px] text-[#888]">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={cn(
              'flex min-w-5 cursor-pointer justify-center text-[13px] transition-colors',

              page === currentPage
                ? 'text-primary cursor-default'
                : 'text-[#666] hover:text-[#2F80ED]',
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-6 w-6 cursor-pointer items-center justify-center text-[#2F80ED] transition-colors hover:text-[#1F6FDB] disabled:pointer-events-none disabled:text-slate-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </nav>
  );
}
