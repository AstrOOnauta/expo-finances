import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

import {
  Card,
  DashboardContainer,
  EyeButton,
  Greeting,
  Header,
  IconArea,
  Photo,
  SignOutButton,
  SummaryCards,
  UserInfo,
  UserName,
  Welcome,
} from './styles';
import Summary from '../../components/Summary';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header>
        <Card>
          <UserInfo>
            <Photo
              resizeMethod="resize"
              source={{
                uri: 'https://avatars.githubusercontent.com/u/81580470?v=4',
              }}
            />
            <Welcome>
              <Greeting>Hello,</Greeting>
              <UserName>Willian</UserName>
            </Welcome>
          </UserInfo>
          <IconArea>
            <EyeButton activeOpacity={0.6}>
              <Feather name="eye" size={24} color="#FBB034" />
            </EyeButton>
            <SignOutButton activeOpacity={0.6}>
              <Ionicons name="power" size={24} color="#FBB034" />
            </SignOutButton>
          </IconArea>
        </Card>
      </Header>
      <SummaryCards>
        <Summary
          type="up"
          title="Deposit"
          amount="R$ 17.400,00"
          lastTransition="Last deposit April 13"
        />
        <Summary
          type="down"
          title="Withdraw"
          amount="R$ 1.259,00"
          lastTransition="Last withdraw April 13"
        />
        <Summary
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransition="April 10-13"
        />
      </SummaryCards>
    </DashboardContainer>
  );
}
