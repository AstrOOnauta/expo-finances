import 'intl';
import 'intl/locale-data/jsonp/en-US';

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
import { categories } from '../../shared/utils/categories';

interface TransactionProps {
  data: TransactionsInterface;
}

export default function Transaction(props: TransactionProps) {
  return (
    <TransactionContainer>
      <TransactionTitle>{props.data.transaction}</TransactionTitle>
      <TransactionAmount type={props.data.transactionType}>
        {props.data.transactionType === 'down' ? '- ' : ''}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(Number(props.data.price))}
      </TransactionAmount>
      <TransactionFooter>
        <Icon
          name={
            categories.filter(
              (findedCategory) =>
                props.data.category === findedCategory.key
            )[0].icon
          }
        />
        <TransactionType>
          {
            categories.filter(
              (findedCategory) =>
                props.data.category === findedCategory.key
            )[0].name
          }
        </TransactionType>
        <TransactionDate>
          {new Date(props.data.date).toLocaleDateString('en-US')}
        </TransactionDate>
      </TransactionFooter>
    </TransactionContainer>
  );
}
