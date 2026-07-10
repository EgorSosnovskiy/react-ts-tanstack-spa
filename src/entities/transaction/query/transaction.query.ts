import { useQuery } from '@tanstack/react-query';

import {
  getTransactionReviewDetails,
  getTransactions,
} from '../api/transaction.api';
import { transactionKeys } from '../model/transaction.keys';

export function useTransactions() {
  return useQuery({
    queryKey: transactionKeys.list(),

    queryFn: getTransactions,
  });
}

export function useTransactionReviewDetails(id?: string) {
  return useQuery({
    queryKey: transactionKeys.detail(id ?? ''),

    queryFn: () => getTransactionReviewDetails(id!),

    enabled: !!id,
  });
}
