import { supabase } from '@/shared/api/supabase';

import type { DashboardData, DashboardPieItem } from '../model/dashboard.types';

const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export async function getDashboardData(): Promise<DashboardData> {
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('*');

  if (error) {
    throw error;
  }

  const rows = transactions ?? [];

  const monthlyMap = new Map<number, number>();
  for (let month = 0; month < 12; month++) {
    monthlyMap.set(month, 0);
  }
  rows.forEach((transaction) => {
    const month = new Date(transaction.created_at).getMonth();

    monthlyMap.set(month, (monthlyMap.get(month) ?? 0) + 1);
  });
  const monthlyTransactions = Array.from(monthlyMap.entries()).map(
    ([month, transactions]) => ({
      month: monthLabels[month],
      transactions,
    }),
  );

  const totalTransactions = rows.length;

  const approvedTransactions = rows.filter(
    (transaction) => transaction.status === 'APPROVED',
  ).length;

  const rejectedTransactions = rows.filter(
    (transaction) => transaction.status === 'REJECTED',
  ).length;

  const pendingApproval = rows.filter(
    (transaction) => transaction.status === 'PENDING',
  ).length;

  const postponedApproval = rows.filter(
    (transaction) => transaction.status === 'POSTPONED',
  ).length;

  const approvalRate =
    totalTransactions === 0
      ? 0
      : Number(((approvedTransactions / totalTransactions) * 100).toFixed(1));

  const processedTransactions = {
    deposits: 0,
    loans: 0,
    withdrawals: 0,
  };
  rows.forEach((transaction) => {
    switch (transaction.type) {
      case 'DEPOSIT':
        processedTransactions.deposits++;
        break;

      case 'LOAN':
        processedTransactions.loans++;
        break;

      case 'WITHDRAW':
        processedTransactions.withdrawals++;
        break;
    }
  });
  const processedTransactionsData: DashboardPieItem[] = [
    {
      type: 'deposits',
      value: processedTransactions.deposits,
    },
    {
      type: 'loans',
      value: processedTransactions.loans,
    },
    {
      type: 'withdrawals',
      value: processedTransactions.withdrawals,
    },
  ];

  return {
    totalTransactions: { value: totalTransactions },
    approvalRate: { value: approvalRate },
    pendingApproval: { value: pendingApproval },
    approvedTransactions: { value: approvedTransactions },
    rejectedTransactions: { value: rejectedTransactions },
    postponedApproval: { value: postponedApproval },

    monthlyTransactions,

    processedTransactions: processedTransactionsData,
  };
}
