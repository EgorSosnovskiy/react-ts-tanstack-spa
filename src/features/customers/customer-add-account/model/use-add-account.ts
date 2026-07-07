import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { createAccount, type CreateAccountParams } from '@/entities/customer';
import { customerKeys } from '@/entities/customer/model/customer.keys';

export function useAddAccount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: CreateAccountParams) => createAccount(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: customerKeys.all,
      });

      toast.success('Account created successfully');
    },

    onError: () => {
      toast.error('Failed to create account');
    },
  });
}
