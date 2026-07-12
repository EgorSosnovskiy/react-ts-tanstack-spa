import { TransactionDetailsSkeleton } from './transaction-details-skeleton';

export function TransactionPageSkeleton() {
  return (
    <section className="flex h-[calc(100vh-72px)]">
      {/* ===================== LEFT LIST ===================== */}

      <aside className="flex w-75 flex-col border-l border-gray-300 bg-gray-100 pt-6">
        <div className="flex flex-1 flex-col gap-1 overflow-hidden px-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex animate-pulse items-stretch justify-between bg-[#6b72800d] px-4 pt-3 pb-1"
            >
              <div className="flex flex-1 justify-between">
                <div className="flex w-35 flex-col">
                  <div className="h-4 w-28 rounded bg-slate-300" />

                  <div className="mt-2 h-3 w-18 rounded bg-slate-200" />

                  <div className="mt-2 h-3 w-26 rounded bg-slate-200" />

                  <div className="mt-5 h-6 w-24 rounded bg-slate-300" />
                </div>

                <div className="flex flex-col items-end">
                  <div className="h-6 w-18 rounded bg-slate-300" />

                  <div className="mt-8 h-4 w-10 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      <TransactionDetailsSkeleton />
    </section>
  );
}
