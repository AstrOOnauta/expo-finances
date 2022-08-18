import { TransactionsInterface } from '../../shared/interfaces/transactions';
import {
  Icon,
  TransactionAmount,
  TransactionContainer,
  TransactionDate,
  TransactionFooter,
  TransactionTitle,
  TransactionType,
} from './style';

interface TransactionProps {
  data: TransactionsInterface;
}

export default function Transaction(props: TransactionProps) {
  return (
    <TransactionContainer>
      <TransactionTitle>{props.data.title}</TransactionTitle>
      <TransactionAmount type={props.data.type}>
        {props.data.amount}
      </TransactionAmount>
      <TransactionFooter>
        <Icon name={props.data.icon} />
        <TransactionType>{props.data.category}</TransactionType>
        <TransactionDate>
          {props.data.date.toLocaleDateString('en-US')}
        </TransactionDate>
      </TransactionFooter>
    </TransactionContainer>
  );
}
