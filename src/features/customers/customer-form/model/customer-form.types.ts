import type { Customer } from '@/entities/customer';

export type CustomerFormValues = Pick<
  Customer,
  'fullName' | 'city' | 'state' | 'address' | 'phone'
>;
