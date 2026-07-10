export const transactionKeys = {
  all: ['transactions'] as const,

  list: () => [...transactionKeys.all, 'list'] as const,

  detail: (id: string) => [...transactionKeys.all, 'detail', id] as const,
};
