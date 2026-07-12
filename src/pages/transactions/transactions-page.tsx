import { TransactionsContent } from '@/widgets/transactions-content';

export function TransactionsPage() {
  return (
    <main className="flex h-[calc(100vh-72px)] flex-col">
      <TransactionsContent />
    </main>
  );
}
