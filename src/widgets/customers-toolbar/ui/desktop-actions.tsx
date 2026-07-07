import type { Customer } from '@/entities/customer';
import { Button } from '@/shared/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

interface DesktopActionsProps {
  selectedCustomer: Customer | null;

  addAccountDisabled: boolean;

  onEditCustomer(): void;

  onAddCustomer(): void;

  onAddAccount(): void;
}

export function DesktopActions({
  selectedCustomer,
  addAccountDisabled,
  onEditCustomer,
  onAddCustomer,
  onAddAccount,
}: DesktopActionsProps) {
  const addAccountTooltip = !selectedCustomer
    ? 'Select a customer'
    : selectedCustomer.balance !== null
      ? 'Customer already has an account'
      : null;

  return (
    <div className="hidden 2xl:ml-auto 2xl:flex 2xl:items-start 2xl:gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block">
            <Button disabled={!selectedCustomer} onClick={onEditCustomer}>
              Edit Info
            </Button>
          </span>
        </TooltipTrigger>

        {!selectedCustomer && (
          <TooltipContent>Select a customer to edit</TooltipContent>
        )}
      </Tooltip>

      <div className="flex flex-col gap-2">
        <Button variant="outline" className="h-10 w-34" onClick={onAddCustomer}>
          Add Customer
        </Button>

        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-block">
              <Button
                variant="outline"
                className="h-10 w-34"
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
    </div>
  );
}
