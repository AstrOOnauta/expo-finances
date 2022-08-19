export interface TransactionsInterface {
  id: string;
  transactionType: 'up' | 'down';
  transaction: string;
  price: string;
  category: string;
  icon?: string;
  date: Date;
};