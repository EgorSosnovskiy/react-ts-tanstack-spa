export type TransactionType = 'DEPOSIT' | 'LOAN' | 'WITHDRAW';

export type TransactionStatus =
  | 'APPROVED'
  | 'REJECTED'
  | 'PENDING'
  | 'POSTPONED';

export interface TransactionListItem {
  id: string;

  customerName: string;

  customerNumber: string;

  createdAt: string;

  type: TransactionType;

  amount: number;

  fraudScore: number;
}

export interface TransactionReviewDetails {
  accountNumber: string;

  atmLatitude: number;

  atmLongitude: number;

  atmStreet: string;
}
