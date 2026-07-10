import { type QueryData } from '@supabase/supabase-js';

import { supabase } from '@/shared/api/supabase';

import type {
  TransactionListItem,
  TransactionReviewDetails,
} from '../model/transaction.types';

export async function getTransactions(): Promise<TransactionListItem[]> {
  const query = supabase
    .from('transaction_review_list_view')
    .select('*')
    .in('status', ['PENDING', 'POSTPONED'])
    .order('created_at', { ascending: false });

  type QueryResult = QueryData<typeof query>;

  const { data, error } = await query;

  if (error) throw error;

  return (data as QueryResult).map((transaction) => ({
    id: transaction.transaction_id,

    customerName: transaction.full_name,

    customerNumber: transaction.customer_number,

    createdAt: transaction.created_at,

    type: transaction.type,

    amount: Number(transaction.amount),

    fraudScore: transaction.fraud_score,
  }));
}

export async function getTransactionReviewDetails(
  id: string,
): Promise<TransactionReviewDetails> {
  const { data: transaction, error: transactionError } = await supabase
    .from('transactions')
    .select(
      `
      account_id,
      atm_latitude,
      atm_longitude
    `,
    )
    .eq('id', id)
    .single();

  if (transactionError) throw transactionError;

  const { data: account, error: accountError } = await supabase
    .from('accounts')
    .select('account_number')
    .eq('id', transaction.account_id)
    .single();

  if (accountError) throw accountError;

  return {
    accountNumber: account.account_number,

    atmLatitude: transaction.atm_latitude,

    atmLongitude: transaction.atm_longitude,
  };
}
