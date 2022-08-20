import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import { categories } from '../../shared/utils/categories';
import HistoryCard from '../../components/HistoryCard';
import { TransactionsInterface } from '../../shared/interfaces/transactions';

import {
  BodyArea,
  Header,
  HistoriesList,
  ResumeContainer,
  Title,
} from './style';

interface AmountByCategory {
  category: string;
  amount: string;
}

export default function Resume() {
  const [amountsByCategory, setAmountsByCategory] = useState<
    AmountByCategory[]
  >([]);

  async function loadTransactions() {
    const response = await AsyncStorage.getItem(
      '@finances:transactions'
    );
    const dataTransactions = response ? JSON.parse(response!) : [];

    const categories = dataTransactions
      .map((item: TransactionsInterface) => item.category)
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );

    const result = categories.map((category: string) => {
      return {
        category,
        amount: dataTransactions
          .filter(
            (transaction: TransactionsInterface) =>
              transaction.category === category
          )
          .reduce(
            (acc: any, curr: TransactionsInterface) =>
              acc + Number(curr.price),
            0
          ),
      };
    });

    setAmountsByCategory(result);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <ResumeContainer>
      <Header>
        <Title>Resume</Title>
      </Header>
      <BodyArea>
        <HistoriesList>
          {amountsByCategory.map((item, index) => {
            return (
              <HistoryCard
                key={index}
                title={
                  categories.filter(
                    (category) => item.category === category.key
                  )[0].name
                }
                amount={item.amount}
                color={
                  categories.filter(
                    (category) => item.category === category.key
                  )[0].color
                }
              />
            );
          })}
        </HistoriesList>
      </BodyArea>
    </ResumeContainer>
  );
}
