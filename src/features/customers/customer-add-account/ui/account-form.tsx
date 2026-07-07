import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import type { AccountFormValues } from '../model/account-form.types';

interface AccountFormProps {
  onSubmit(values: AccountFormValues): void;

  isSubmitting: boolean;
}

export function AccountForm({ onSubmit, isSubmitting }: AccountFormProps) {
  const form = useForm<AccountFormValues>({
    defaultValues: {
      balance: 0,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6 pt-0">
      <div className="space-y-2">
        <label className="text-sm font-medium">Initial Balance</label>

        <Input
          type="number"
          step="0.01"
          {...register('balance', {
            required: 'Balance is required',
            valueAsNumber: true,
            min: {
              value: 0,
              message: 'Balance cannot be negative',
            },
          })}
        />

        {errors.balance && (
          <p className="text-sm text-red-500">{errors.balance.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={!isDirty || isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Creating...' : 'Create Account'}
      </Button>
    </form>
  );
}
