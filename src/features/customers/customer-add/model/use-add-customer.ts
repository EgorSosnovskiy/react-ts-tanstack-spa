import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  createCustomer,
  type CreateCustomerParams,
  customerKeys,
} from '@/entities/customer';

export function useAddCustomer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreateCustomerParams) => createCustomer(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: customerKeys.all,
      });
      toast.success('Customer added successfully');
    },
    onError: () => {
      toast.error('Failed to add customer');
    },
  });
}
