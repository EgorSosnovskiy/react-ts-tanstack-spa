import type { Customer } from '../model/customer.types';

type CustomerDto = {
  id: string;

  customer_number: string;

  full_name: string;

  city: string;

  state: string;

  address: string;

  phone: string;

  account_number: string;

  balance: number;

  status: Customer['status'];
};

export function mapCustomer(dto: CustomerDto): Customer {
  return {
    id: dto.id,

    customerNumber: dto.customer_number,

    fullName: dto.full_name,

    city: dto.city,

    state: dto.state,

    address: dto.address,

    phone: dto.phone,

    balance: dto.balance,

    status: dto.status,
  };
}
