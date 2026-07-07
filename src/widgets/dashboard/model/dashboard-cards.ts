import { ArrowRightLeft, Hourglass, Loader, Percent, X } from 'lucide-react';

export const dashboardCards = [
  {
    icon: ArrowRightLeft,
    iconColor: '#7DB1F1',
    value: '12 112',
    label: 'All transactions',
  },
  {
    icon: Percent,
    iconColor: '#39D000',
    value: '99.3%',
    label: 'Approval Rate',
  },
  {
    icon: Hourglass,
    iconColor: '#7DB1F1',
    value: '10',
    label: 'Pending Approval',
  },
  {
    icon: X,
    iconColor: '#FF5A5A',
    value: '15',
    label: 'Rejected Transactions',
    actionLabel: 'Analyze',
  },
  {
    icon: Loader,
    iconColor: '#FFB547',
    value: '70',
    label: 'Postponed Approval',
    actionLabel: 'Analyze',
  },
];
