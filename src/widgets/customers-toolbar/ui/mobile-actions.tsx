import type { Customer } from '@/entities/customer';
import { Button } from '@/shared/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

interface MobileActionsProps {
  selectedCustomer: Customer | null;

  addAccountDisabled: boolean;

  onEditCustomer(): void;

  onAddCustomer(): void;

  onAddAccount(): void;
}

export function MobileActions({
  selectedCustomer,
  addAccountDisabled,
  onEditCustomer,
  onAddCustomer,
  onAddAccount,
}: MobileActionsProps) {
  const addAccountTooltip = !selectedCustomer
    ? 'Select a customer'
    : selectedCustomer.balance !== null
      ? 'Customer already has an account'
      : null;

  return (
    <div className="grid grid-cols-3 gap-2 2xl:hidden">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="block">
            <Button
              disabled={!selectedCustomer}
              onClick={onEditCustomer}
              className="h-10 w-full text-xs"
            >
              Edit Info
            </Button>
          </span>
        </TooltipTrigger>

        {!selectedCustomer && (
          <TooltipContent>Select a customer to edit</TooltipContent>
        )}
      </Tooltip>

      <Button
        variant="outline"
        className="h-10 w-full text-xs"
        onClick={onAddCustomer}
      >
        Add Customer
      </Button>

      <Tooltip>
        <TooltipTrigger asChild>
          <span className="block">
            <Button
              variant="outline"
              className="h-10 w-full text-xs"
              onClick={onAddAccount}
              disabled={addAccountDisabled}
            >
              Add Account
            </Button>
          </span>
        </TooltipTrigger>

        {addAccountTooltip && (
          <TooltipContent>{addAccountTooltip}</TooltipContent>
        )}
      </Tooltip>
    </div>
  );
}
