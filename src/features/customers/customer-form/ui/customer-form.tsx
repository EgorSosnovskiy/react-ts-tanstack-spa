import { useForm } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

import type { CustomerFormValues } from '../model/customer-form.types';

interface CustomerFormProps {
  values?: CustomerFormValues;
  onSubmit(values: CustomerFormValues): void;
  isSubmitting: boolean;
  submitLabel: string;
}

const fields = [
  {
    name: 'fullName',
    label: 'Full Name',
    rules: {
      required: 'Full Name is required',
      minLength: {
        value: 3,
        message: 'Full Name must contain at least 3 characters',
      },
    },
  },
  {
    name: 'city',
    label: 'City',
    rules: {
      required: 'City is required',
    },
  },
  {
    name: 'state',
    label: 'State',
    rules: {
      required: 'State is required',
    },
  },
  {
    name: 'address',
    label: 'Address',
    rules: {
      required: 'Address is required',
      minLength: {
        value: 5,
        message: 'Address must contain at least 5 characters',
      },
    },
  },
  {
    name: 'phone',
    label: 'Phone Number',
    rules: {
      required: 'Phone Number is required',
      minLength: {
        value: 7,
        message: 'Phone Number must contain at least 7 characters',
      },
    },
  },
] as const;

export function CustomerForm({
  values,
  onSubmit,
  isSubmitting,
  submitLabel,
}: CustomerFormProps) {
  const form = useForm<CustomerFormValues>({
    defaultValues: values ?? {
      fullName: '',
      city: '',
      state: '',
      address: '',
      phone: '',
    },
  });

  const {
    formState: { isDirty, errors },
  } = form;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-6 pt-0">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label className="text-sm font-medium">{field.label}</label>

          <Input
            className={cn(
              errors[field.name] &&
                'mb-0 border-red-500 focus-visible:ring-red-500',
            )}
            {...form.register(field.name, field.rules)}
          />

          {errors[field.name] && (
            <p className="text-sm text-red-500">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <Button
        type="submit"
        disabled={!isDirty || isSubmitting}
        className="mt-4 w-full"
      >
        {isSubmitting ? 'Saving...' : submitLabel}
      </Button>
    </form>
  );
}
