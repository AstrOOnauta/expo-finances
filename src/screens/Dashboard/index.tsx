import React, { useCallback, useEffect, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

interface SummariesInterface {
  deposit: {
    value: number;
    lastTransaction: Date;
  };
  withdraw: {
    value: number;
    lastTransaction: Date;
  };
  total: {
    value: number;
    range: string;
  };
}

export default function Dashboard() {
  const [transactions, setTransactions] = useState<
    TransactionsInterface[]
  >([]);
  const [summaries, setSummaries] = useState<SummariesInterface>({
    deposit: {
      value: 0,
      lastTransaction: new Date(),
    },
    withdraw: {
      value: 0,
      lastTransaction: new Date(),
    },
    total: {
      value: 0,
      range: '',
    },
  });

  async function loadTransactions() {
    const response = await AsyncStorage.getItem(
      '@finances:transactions'
    );
    const dataTransactions = response ? JSON.parse(response!) : [];
    setTransactions(dataTransactions);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useEffect(() => {
    let upTransactions = 0;
    let downTransactions = 0;
    let totalTransactions = 0;

    transactions.map((transaction) => {
      if (transaction.transactionType === 'up') {
        upTransactions += Number(transaction.price);
        totalTransactions += Number(transaction.price);
      } else {
        downTransactions -= Number(transaction.price);
        totalTransactions -= Number(transaction.price);
      }
    });

    const lastTransaction = Math.max.apply(
      Math,
      transactions.map((transaction) =>
        new Date(transaction.date).getTime()
      )
    );

    const lastUpTransaction = Math.max.apply(
      Math,
      transactions
        .filter((transaction) => transaction.transactionType === 'up')
        .map((transaction) => new Date(transaction.date).getTime())
    );

    const lastDownTransaction = Math.max.apply(
      Math,
      transactions
        .filter(
          (transaction) => transaction.transactionType === 'down'
        )
        .map((transaction) => new Date(transaction.date).getTime())
    );

    setSummaries({
      deposit: {
        value: upTransactions,
        lastTransaction: new Date(lastUpTransaction),
      },
      withdraw: {
        value: downTransactions,
        lastTransaction: new Date(lastDownTransaction),
      },
      total: {
        value: totalTransactions,
        range: `${new Date(lastTransaction).toLocaleDateString(
          'en-US',
          {
            month: 'short',
          }
        )} 01 - ${new Date(lastTransaction).toLocaleDateString(
          'en-US',
          {
            day: 'numeric',
          }
        )}`,
      },
    });
  }, [transactions]);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

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
          amount={summaries.deposit.value}
          lastTransition={`Last deposit ${summaries.deposit.lastTransaction.toLocaleDateString(
            'en-US',
            {
              month: 'short',
              day: 'numeric',
            }
          )}`}
        />
        <Summary
          type="down"
          title="Withdraw"
          amount={summaries.withdraw.value}
          lastTransition={`Last withdraw ${summaries.withdraw.lastTransaction.toLocaleDateString(
            'en-US',
            {
              month: 'short',
              day: 'numeric',
            }
          )}`}
        />
        <Summary
          type="total"
          title="Total"
          amount={summaries.total.value}
          lastTransition={summaries.total.range}
        />
      </SummaryCards>
      <TransactionsTitle>Transactions</TransactionsTitle>
      <TransactionCards
        showsVerticalScrollIndicator={false}
        data={transactions}
        renderItem={({ item }: any, index: number) => (
          <Transaction data={item} key={index} />
        )}
      />
    </DashboardContainer>
  );
}
