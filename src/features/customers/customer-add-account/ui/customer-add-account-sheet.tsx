import type { Customer } from '@/entities/customer';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';

import { useAddAccount } from '../model/use-add-account';
import { AccountForm } from './account-form';

interface CustomerAddAccountSheetProps {
  customer: Customer | null;

  open: boolean;

  onOpenChange(open: boolean): void;
}

export function CustomerAddAccountSheet({
  customer,
  open,
  onOpenChange,
}: CustomerAddAccountSheetProps) {
  const mutation = useAddAccount();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="w-130 sm:max-w-130"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SheetHeader className="mt-16 flex flex-col items-center">
          <SheetTitle>Add Account</SheetTitle>

          <SheetDescription>
            Create an account for the selected customer.
          </SheetDescription>
        </SheetHeader>

        {customer && (
          <AccountForm
            onSubmit={(values) => {
              mutation.mutate(
                {
                  customerId: customer.id,
                  balance: values.balance,
                },
                {
                  onSuccess: () => {
                    onOpenChange(false);
                  },
                },
              );
            }}
            isSubmitting={mutation.isPending}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
