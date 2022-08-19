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
  TransactionCards,
  TransactionsTitle,
  UserInfo,
  UserName,
  Welcome,
} from './styles';
import Summary from '../../components/Summary';
import Transaction from '../../components/Transaction';
import { TransactionsInterface } from '../../shared/interfaces/transactions';

const TRANSACTIONS_DATA: TransactionsInterface[] = [
  {
    type: 'up',
    title: 'Desenvolvimento de Site',
    amount: 'R$ 12.000,00',
    category: 'Vendas',
    icon: 'dollar-sign',
    date: new Date('2022-07-08T11:19:05.340000Z'),
  },
  {
    type: 'down',
    title: 'Hamburgueria Pizzy',
    amount: '- R$ 59,00',
    category: 'Alimentação',
    icon: 'coffee',
    date: new Date('2022-07-08T11:19:05.340000Z'),
  },
  {
    type: 'down',
    title: 'Aluguel do apartamento',
    amount: '- R$ 1.200,00',
    category: 'Casa',
    icon: 'home',
    date: new Date('2022-07-08T11:19:05.340000Z'),
  },
];

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
      <TransactionsTitle>Transactions</TransactionsTitle>
      <TransactionCards
        showsVerticalScrollIndicator={false}
        data={TRANSACTIONS_DATA}
        renderItem={({ item }: any, index: number) => (
          <Transaction data={item} key={index} />
        )}
      />
    </DashboardContainer>
  );
}
