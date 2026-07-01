import type { GetCustomersParams } from '../api/customer.api';

export const customerKeys = {
  all: ['customers'] as const,

  list: (params: GetCustomersParams) => [...customerKeys.all, params] as const,
};
