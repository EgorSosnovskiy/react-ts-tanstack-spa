import { CustomerForm } from '@/features/customers/customer-form';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';

import { useAddCustomer } from '../model/use-add-customer';

interface CustomerAddSheetProps {
  open: boolean;

  onOpenChange(open: boolean): void;
}

export function CustomerAddSheet({
  open,
  onOpenChange,
}: CustomerAddSheetProps) {
  const mutation = useAddCustomer();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="w-130 sm:max-w-130"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SheetHeader className="mt-16 flex flex-col items-center">
          <SheetTitle>Add Customer</SheetTitle>

          <SheetDescription>Create a new customer.</SheetDescription>
        </SheetHeader>

        <CustomerForm
          onSubmit={(values) => {
            mutation.mutate(values, {
              onSuccess: () => {
                onOpenChange(false);
              },
            });
          }}
          isSubmitting={mutation.isPending}
          submitLabel="Create Customer"
        />
      </SheetContent>
    </Sheet>
  );
}
