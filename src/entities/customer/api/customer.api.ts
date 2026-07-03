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

export async function getCustomers({
  page,
  pageSize,
  search,
  accountNumber,
  balance,
}: GetCustomersParams): Promise<GetCustomersResponse> {
  let query = supabase.from('customers_view').select('*', {
    count: 'exact',
  });

  if (search.trim()) {
    query = query.or(
      `customer_number.ilike.%${search}%,full_name.ilike.%${search}%`,
    );
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
