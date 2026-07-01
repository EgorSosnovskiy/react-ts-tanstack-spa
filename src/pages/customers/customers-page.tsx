import { CustomersContent } from '@/features/customers';

import { CustomerProfile } from './components/customer-profile';
import { CustomersNavigation } from './components/customers-navigation';

export function CustomersPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1600px] flex-col px-8 py-6">
      <CustomersNavigation />
      <CustomerProfile />
      <CustomersContent />
    </main>
  );
}
