import { CustomersContent } from '@/widgets/customers-content';

import { CustomerProfile } from './components/customer-profile';
import { CustomersNavigation } from './components/customers-navigation';

export function CustomersPage() {
  return (
    <main className="mt-5 flex w-full flex-col gap-4 bg-white">
      <CustomersNavigation />
      <CustomerProfile />
      <CustomersContent />
    </main>
  );
}
