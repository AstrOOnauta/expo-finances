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

// withdraw //#E52E4D //#FBB034
// <Feather name="arrow-down-circle" size={24} color="black" />
// <Feather name="dollar-sign" size={24} color="black" />

interface SummaryProps {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
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
        <BodyTitle>{props.amount}</BodyTitle>
        <BodyText type={props.type}>{props.lastTransition}</BodyText>
      </BodyArea>
    </SummaryContainer>
  );
}
