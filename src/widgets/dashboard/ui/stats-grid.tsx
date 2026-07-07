import { dashboardCards } from '../model/dashboard-cards';
import { ApprovedCard } from './approved-card';
import { StatsCard } from './stats-card';

export function StatsGrid() {
  return (
    <div className="grid min-w-0 gap-2 xl:grid-cols-3">
      {dashboardCards.slice(0, 3).map((card) => (
        <StatsCard key={card.label} {...card} />
      ))}

      <ApprovedCard />

      {dashboardCards.slice(3).map((card) => (
        <StatsCard key={card.label} {...card} className="h-52" />
      ))}
    </div>
  );
}
