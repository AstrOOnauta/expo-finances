export interface TransactionsInterface {
  type: 'up' | 'down';
  title: string;
  amount: string;
  category: string;
  icon: string;
  date: Date;
};