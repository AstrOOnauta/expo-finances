import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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
import AuthContext from '../../shared/context/AuthContext';
import NoData from '../../components/NoData';

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
  const { user, signOut } = useContext(AuthContext);

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
      `@meteor-finances:transactions_user:${user.id}`
    );
    const dataTransactions = response ? JSON.parse(response!) : [];
    setTransactions(dataTransactions);
  }

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
        range:
          lastTransaction !== -Infinity
            ? `${new Date(lastTransaction).toLocaleDateString(
                'en-US',
                {
                  month: 'short',
                }
              )} 01 - ${new Date(lastTransaction).toLocaleDateString(
                'en-US',
                {
                  day: 'numeric',
                }
              )}`
            : '',
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
                uri: user.photo,
              }}
            />
            <Welcome>
              <Greeting>Hello,</Greeting>
              <UserName>{user.name}</UserName>
            </Welcome>
          </UserInfo>
          <IconArea>
            <EyeButton activeOpacity={0.6}>
              <Feather name="eye" size={24} color="#FBB034" />
            </EyeButton>
            <SignOutButton activeOpacity={0.6} onPress={signOut}>
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
          lastTransition={
            summaries.total.range === ''
              ? ''
              : `Last deposit ${summaries.deposit.lastTransaction.toLocaleDateString(
                  'en-US',
                  {
                    month: 'short',
                    day: 'numeric',
                  }
                )}`
          }
        />
        <Summary
          type="down"
          title="Withdraw"
          amount={summaries.withdraw.value}
          lastTransition={
            summaries.total.range === ''
              ? ''
              : `Last withdraw ${summaries.withdraw.lastTransaction.toLocaleDateString(
                  'en-US',
                  {
                    month: 'short',
                    day: 'numeric',
                  }
                )}`
          }
        />
        <Summary
          type="total"
          title="Total"
          amount={summaries.total.value}
          lastTransition={summaries.total.range}
        />
      </SummaryCards>
      <TransactionsTitle>Transactions</TransactionsTitle>
      {transactions.length === 0 ? (
        <NoData />
      ) : (
        <TransactionCards
          showsVerticalScrollIndicator={false}
          data={transactions}
          renderItem={({ item }: any, index: number) => (
            <Transaction data={item} key={index} />
          )}
        />
      )}
    </DashboardContainer>
  );
}
