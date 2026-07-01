import type { Database } from '@/shared/api/database.types';

export type AccountStatus = Database['public']['Enums']['account_status'];

export interface Customer {
  id: string;

  customerNumber: string;

  fullName: string;

  city: string;

  state: string;

  address: string;

  phone: string;

  balance: number;

  status: AccountStatus;
}
