import { supabase } from '@/shared/api/supabase';

import { getBalanceRange } from '../model/balance-range';
import type { Customer } from '../model/customer.types';
import { mapCustomer } from './customer.mapper';

export interface GetCustomersParams {
  page: number;

  pageSize: number;

  search: string;

  accountNumber: string;

  balance: string;
}

export interface GetCustomersResponse {
  customers: Customer[];

  total: number;
}

export interface UpdateCustomerParams {
  id: string;

  fullName: string;

  city: string;

  state: string;

  address: string;

  phone: string;
}

export interface CreateCustomerParams {
  fullName: string;

  city: string;

  state: string;

  address: string;

  phone: string;
}

export interface CreateAccountParams {
  customerId: string;

  balance: number;
}

export async function getCustomers({
  page,
  pageSize,
  search,
  accountNumber,
  balance,
}: GetCustomersParams): Promise<GetCustomersResponse> {
  let query = supabase
    .from('customers_view')
    .select('*', {
      count: 'exact',
    })
    .order('customer_number', { ascending: true });

  const isNumber = /^\d+$/.test(search.trim());

  if (isNumber) {
    query = query.eq('customer_number', Number(search));
  } else {
    query = query.ilike('full_name', `%${search}%`);
  }

  if (accountNumber.trim()) {
    query = query.ilike('account_number', `%${accountNumber}%`);
  }

  if (balance.trim()) {
    const parsedBalance = Number(balance.replace(',', '.'));

    if (!Number.isNaN(parsedBalance)) {
      const { min, max } = getBalanceRange(parsedBalance);

      query = query.gte('balance', min).lte('balance', max);
    }
  }

  const from = (page - 1) * pageSize;

  const to = from + pageSize - 1;

  const { data, count, error } = await query.range(from, to);

  if (error) {
    throw error;
  }

  return {
    customers: data.map(mapCustomer),

    total: count ?? 0,
  };
}

export async function updateCustomer({
  id,
  fullName,
  city,
  state,
  address,
  phone,
}: UpdateCustomerParams) {
  const { error } = await supabase
    .from('customers')
    .update({
      full_name: fullName,
      city,
      state,
      address,
      phone,
    })
    .eq('id', id);

  if (error) {
    throw error;
  }
}

export async function createCustomer({
  fullName,
  city,
  state,
  address,
  phone,
}: CreateCustomerParams) {
  const { error } = await supabase.from('customers').insert({
    full_name: fullName,
    city,
    state,
    address,
    phone,
  });

  if (error) {
    throw error;
  }
}

export async function createAccount({
  customerId,
  balance,
}: CreateAccountParams) {
  const { error } = await supabase.from('accounts').insert({
    customer_id: customerId,
    balance,
    status: 'ACTIVE',
  });

  if (error) {
    throw error;
  }
}
