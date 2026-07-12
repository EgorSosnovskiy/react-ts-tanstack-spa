import { useDashboard } from '@/entities/dashboard';
import { DashboardSkeleton } from '@/shared/ui/skeletons/dashboard-skeleton';
import { ErrorState } from '@/shared/ui/states/error-state';

import { ChartCard } from './ui/chart-card';
import { PieCard } from './ui/pie-card';
import { StatsGrid } from './ui/stats-grid';

export function DashboardContent() {
  const { data, isLoading, isError } = useDashboard();

  return (
    <section className="mt-5 px-6 pb-4">
      <h2 className="mb-6 text-sm font-medium tracking-wide text-[#2F80ED] uppercase">
        Fraud Management Dashboard
      </h2>
      {isLoading ? (
        <DashboardSkeleton />
      ) : isError || !data ? (
        <ErrorState message="Unable to load dashboard data. Please try again later." />
      ) : (
        <>
          <div className="grid gap-2 xl:grid-cols-[260px_minmax(0,1fr)]">
            <PieCard
              data={data.processedTransactions}
              total={data.totalTransactions.value}
            />

            <div className="flex min-h-0 min-w-0 flex-col gap-2">
              <StatsGrid data={data} />

              <ChartCard data={data.monthlyTransactions} />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
