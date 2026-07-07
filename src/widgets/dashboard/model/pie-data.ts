import type { ChartConfig } from '@/shared/ui/chart';

export type PieType = 'deposits' | 'loans' | 'withdrawals';

export const pieData: {
  type: PieType;
  value: number;
  fill: string;
}[] = [
  {
    type: 'deposits',
    value: 72,
    fill: '#2F80ED',
  },
  {
    type: 'loans',
    value: 20,
    fill: '#6FAAE8',
  },
  {
    type: 'withdrawals',
    value: 8,
    fill: '#BEDBFA',
  },
];

export const totalTransactions = pieData.reduce(
  (sum, item) => sum + item.value,
  0,
);

export const pieConfig = {
  deposits: {
    label: 'Deposits',
    color: '#2F80ED',
  },
  loans: {
    label: 'Loans',
    color: '#68A4E3',
  },
  withdrawals: {
    label: 'Withdrawals',
    color: '#C8DDF3',
  },
} satisfies ChartConfig;
