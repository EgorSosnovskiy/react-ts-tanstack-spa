import { format } from 'date-fns';

import type { TransactionType } from '../model/transaction.types';

export function formatTransactionDate(date: string) {
  return format(new Date(date), 'M/d/yyyy h:mm a');
}

export function formatTransactionType(type: TransactionType) {
  return type === 'DEPOSIT' ? 'Cash-in' : 'Cash-out';
}

export function formatFraudScore(score: number) {
  if (score >= 500) {
    return 'bg-[#FDB74C]';
  }

  return 'bg-[#C9EFA0] text-green-600';
}

export function formatTransactionAmount(amount: number) {
  return `$${amount.toFixed(2)}`;
}
