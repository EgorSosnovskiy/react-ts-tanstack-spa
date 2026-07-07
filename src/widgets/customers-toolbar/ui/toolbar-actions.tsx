import type { Customer } from '@/entities/customer';

import { DesktopActions } from './desktop-actions';
import { MobileActions } from './mobile-actions';

interface ToolbarActionsProps {
  selectedCustomer: Customer | null;

  addAccountDisabled: boolean;

  onEditCustomer(): void;

  onAddCustomer(): void;

  onAddAccount(): void;
}

export function ToolbarActions(props: ToolbarActionsProps) {
  return (
    <>
      <DesktopActions {...props} />

      <MobileActions {...props} />
    </>
  );
}
