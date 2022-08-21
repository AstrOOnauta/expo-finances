import React from 'react';

import {
  BodyArea,
  BodyText,
  BodyTitle,
  HeaderArea,
  HeaderIcon,
  HeaderTitle,
  SummaryContainer,
} from './style';

interface SummaryProps {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: number;
  lastTransition: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

export default function Summary(props: SummaryProps) {
  return (
    <SummaryContainer type={props.type}>
      <HeaderArea>
        <HeaderTitle>{props.title}</HeaderTitle>
        <HeaderIcon name={icon[props.type]} type={props.type} />
      </HeaderArea>
      <BodyArea>
        <BodyTitle type={props.type}>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(Number(props.amount))}
        </BodyTitle>
        <BodyText type={props.type}>{props.lastTransition}</BodyText>
      </BodyArea>
    </SummaryContainer>
  );
}
