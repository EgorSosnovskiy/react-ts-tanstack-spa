export function CustomersTableSkeleton() {
  return (
    <section className="overflow-hidden bg-white">
      {/* header */}
      <div className="border-b">
        <div className="grid h-11 grid-cols-7 items-center gap-4 px-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-3 w-full animate-pulse rounded bg-slate-200"
            />
          ))}
        </div>
      </div>

      {/* rows */}
      <div>
        {Array.from({ length: 8 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid h-10 grid-cols-7 items-center gap-4 border-b px-4"
          >
            {Array.from({ length: 7 }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="h-3 w-full animate-pulse rounded bg-slate-100"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
