import type { Customer } from '@/entities/customer';
import { CustomerForm } from '@/features/customers/customer-form';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';

import { useEditCustomer } from '../model/use-edit-customer';

interface CustomerEditSheetProps {
  customer: Customer | null;

  open: boolean;

  onOpenChange(open: boolean): void;
}

export function CustomerEditSheet({
  customer,
  open,
  onOpenChange,
}: CustomerEditSheetProps) {
  const mutation = useEditCustomer();
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="w-130 sm:max-w-130"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SheetHeader className="mt-16 flex flex-col items-center">
          <SheetTitle>Edit Customer</SheetTitle>

          <SheetDescription>Update customer information.</SheetDescription>
        </SheetHeader>

        {customer && (
          <CustomerForm
            values={{
              fullName: customer.fullName,
              city: customer.city,
              state: customer.state,
              address: customer.address,
              phone: customer.phone,
            }}
            onSubmit={(values) => {
              mutation.mutate(
                {
                  id: customer.id,
                  ...values,
                },
                {
                  onSuccess: () => {
                    onOpenChange(false);
                  },
                },
              );
            }}
            isSubmitting={mutation.isPending}
            submitLabel="Save Changes"
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
