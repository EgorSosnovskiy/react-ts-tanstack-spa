import { useQuery } from '@tanstack/react-query';

import { getCustomers, type GetCustomersParams } from '../api/customer.api';
import { customerKeys } from '../model/customer.keys';

export function useCustomers(params: GetCustomersParams) {
  return useQuery({
    queryKey: customerKeys.list(params),

    queryFn: () => getCustomers(params),

    placeholderData: (previousData) => previousData,
  });
}
