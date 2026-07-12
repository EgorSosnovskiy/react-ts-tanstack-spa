import { useEffect } from 'react';

import type { TransactionListItem } from '@/entities/transaction';
import { Route } from '@/routes/transactions';

interface UseSelectedTransactionResult {
  selectedId: string | undefined;

  selectTransaction: (id: string) => void;
}

export function useSelectedTransaction(
  transactions: TransactionListItem[],
): UseSelectedTransactionResult {
  const { id: selectedId } = Route.useSearch();

  const navigate = Route.useNavigate();

  useEffect(() => {
    if (transactions.length === 0) return;

    const exists = transactions.some(
      (transaction) => transaction.id === selectedId,
    );

    if (!selectedId || !exists) {
      navigate({
        search: (prev) => ({
          ...prev,
          id: transactions[0].id,
        }),
        replace: true,
      });
    }
  }, [transactions, selectedId, navigate]);

  function selectTransaction(id: string) {
    navigate({
      search: (prev) => ({
        ...prev,
        id,
      }),
    });
  }

  return {
    selectedId,
    selectTransaction,
  };
}
