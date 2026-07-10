import { createFileRoute } from '@tanstack/react-router';

import { TransactionsPage } from '@/pages/transactions';

export const Route = createFileRoute('/transactions')({
  validateSearch: (search) => ({
    id: typeof search.id === 'string' ? search.id : undefined,
  }),

  component: TransactionsPage,
});
