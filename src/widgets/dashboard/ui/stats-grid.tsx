import { ArrowRightLeft, Hourglass, Loader, Percent, X } from 'lucide-react';

import type { DashboardData } from '@/entities/dashboard';

import { ApprovedCard } from './approved-card';
import { StatsCard } from './stats-card';

interface StatsGridProps {
  data: DashboardData;
}

export function StatsGrid({ data }: StatsGridProps) {
  const statsCards = [
    {
      icon: ArrowRightLeft,
      iconColor: '#7DB1F1',
      value: data.totalTransactions.value,
      label: 'All transactions',
    },
    {
      icon: Percent,
      iconColor: '#39D000',
      value: `${data.approvalRate.value}%`,
      label: 'Approval Rate',
    },
    {
      icon: Hourglass,
      iconColor: '#7DB1F1',
      value: data.pendingApproval.value,
      label: 'Pending Approval',
    },
  ];
  const actionCards = [
    {
      icon: X,
      iconColor: '#FF5A5A',
      value: data.rejectedTransactions.value,
      label: 'Rejected Transactions',
      actionLabel: 'Analyze',
    },
    {
      icon: Loader,
      iconColor: '#FFB547',
      value: data.postponedApproval.value,
      label: 'Postponed Approval',
      actionLabel: 'Analyze',
    },
  ];
  return (
    <div className="grid min-w-0 gap-2 xl:grid-cols-3">
      {statsCards.map((card) => (
        <StatsCard key={card.label} {...card} />
      ))}

      <ApprovedCard
        approved={data.approvedTransactions.value}
        rejected={data.rejectedTransactions.value}
      />

      {actionCards.map((card) => (
        <StatsCard key={card.label} {...card} className="h-52" />
      ))}
    </div>
  );
}
