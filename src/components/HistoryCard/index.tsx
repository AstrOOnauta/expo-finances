import {
  HistoryAmount,
  HistoryCardContainer,
  HistoryTitle,
} from './style';

interface HistoryCardProps {
  title: string;
  amount: string;
  color: string;
}

export default function HistoryCard(props: HistoryCardProps) {
  return (
    <HistoryCardContainer color={props.color}>
      <HistoryTitle>{props.title}</HistoryTitle>
      <HistoryAmount>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(Number(props.amount))}
      </HistoryAmount>
    </HistoryCardContainer>
  );
}
