export function TransactionDetailsSkeleton() {
  return (
    <section className="flex-1 overflow-hidden px-4 py-3">
      <div className="ml-2 h-4 w-44 animate-pulse rounded bg-slate-200" />

      {/* Badge */}

      <div className="mt-2 animate-pulse rounded border bg-[#f8ead2] px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="h-20 w-10 rounded bg-slate-300" />

            <div className="space-y-2">
              <div className="h-5 w-52 rounded bg-slate-300" />
              <div className="h-3 w-44 rounded bg-slate-200" />
            </div>
          </div>

          <div className="h-8 w-20 rounded bg-slate-300" />
        </div>
      </div>

      {/* Main grid */}

      <div className="mt-1 grid grid-cols-[1fr_600px] gap-1">
        {/* Left */}

        <div className="flex flex-col gap-1">
          {[0, 1].map((card) => (
            <div key={card} className="rounded border bg-gray-50 shadow-sm">
              <div className="px-5 pt-5">
                <div className="h-5 w-28 animate-pulse rounded bg-slate-300" />

                <div className="mt-2 h-px bg-slate-200" />
              </div>

              <div className="space-y-3 p-5">
                {Array.from({ length: 5 }).map((_, row) => (
                  <div
                    key={row}
                    className="grid grid-cols-[120px_1fr] items-center"
                  >
                    <div className="ml-auto h-3 w-20 animate-pulse rounded bg-slate-200" />

                    <div className="ml-6 h-4 w-36 animate-pulse rounded bg-slate-300" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ATM */}

        <div className="rounded border bg-gray-50 shadow-sm">
          <div className="px-5 pt-5">
            <div className="h-5 w-16 animate-pulse rounded bg-slate-300" />

            <div className="mt-2 h-px bg-slate-200" />
          </div>

          <div className="p-3">
            <div className="mx-2 h-4 w-56 animate-pulse rounded bg-slate-200" />

            <div className="mx-2 mt-4 h-85 animate-pulse rounded border bg-slate-200" />
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-1 rounded border bg-white px-6 py-2 shadow-sm">
        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-11 animate-pulse rounded bg-slate-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
