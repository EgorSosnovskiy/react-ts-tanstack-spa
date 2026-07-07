import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  customerKeys,
  updateCustomer,
  type UpdateCustomerParams,
} from '@/entities/customer';

export function useEditCustomer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: UpdateCustomerParams) => updateCustomer(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: customerKeys.all,
      });
      toast.success('Customer updated successfully');
    },
    onError: () => {
      toast.error('Failed to update customer');
    },
  });
}
