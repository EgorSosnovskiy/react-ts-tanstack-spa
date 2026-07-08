export function DashboardSkeleton() {
  return (
    <section>
      <div className="grid gap-2 xl:grid-cols-[260px_minmax(0,1fr)]">
        {/* Pie card */}
        <div className="flex h-full min-h-100 flex-col rounded border bg-white p-4 shadow-sm">
          <div className="mx-auto mt-6 h-4 w-40 animate-pulse rounded bg-slate-200" />

          <div className="mx-auto mt-14 h-55 w-55 animate-pulse rounded-full bg-slate-100" />

          <div className="mt-8 ml-6 h-12 w-36 animate-pulse rounded bg-slate-200" />

          <div className="mt-4 ml-6 space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-4 w-28 animate-pulse rounded bg-slate-100"
              />
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex min-h-0 min-w-0 flex-col gap-2">
          {/* Stats */}
          <div className="grid min-w-0 gap-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex h-42 flex-col justify-center rounded border bg-white p-4 shadow-sm"
              >
                <div className="h-8 w-8 animate-pulse rounded bg-slate-200" />

                <div className="mt-4 h-8 w-24 animate-pulse rounded bg-slate-200" />

                <div className="mt-3 h-4 w-32 animate-pulse rounded bg-slate-100" />
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="flex h-52 flex-col rounded border bg-white p-6 shadow-sm">
            <div className="h-5 w-52 animate-pulse rounded bg-slate-200" />

            <div className="mt-6 h-32 w-full animate-pulse rounded bg-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
