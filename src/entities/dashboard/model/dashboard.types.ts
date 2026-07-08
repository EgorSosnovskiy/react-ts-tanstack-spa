export interface DashboardMetric {
  value: number;
}

export interface DashboardChartPoint {
  month: string;
  transactions: number;
}

export type PieType = 'deposits' | 'loans' | 'withdrawals';

export interface DashboardPieItem {
  type: PieType;
  value: number;
}

export interface DashboardData {
  totalTransactions: DashboardMetric;

  approvalRate: DashboardMetric;

  pendingApproval: DashboardMetric;

  approvedTransactions: DashboardMetric;

  rejectedTransactions: DashboardMetric;

  postponedApproval: DashboardMetric;

  monthlyTransactions: DashboardChartPoint[];

  processedTransactions: DashboardPieItem[];
}
