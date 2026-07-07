import { chartData } from '../model/chart-data';
import { ChartCard } from './chart-card';
import { PieCard } from './pie-card';
import { StatsGrid } from './stats-grid';

export function DashboardContent() {
  return (
    <section className="px-6 pb-4">
      <h2 className="mb-6 text-sm font-medium tracking-wide text-[#2F80ED] uppercase">
        Fraud Management Dashboard
      </h2>

      <div className="grid gap-2 xl:grid-cols-[260px_minmax(0,1fr)]">
        <PieCard />

        <div className="flex min-h-0 min-w-0 flex-col gap-2">
          <StatsGrid />

          <ChartCard data={chartData} />
        </div>
      </div>
    </section>
  );
}
