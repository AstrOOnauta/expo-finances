import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { VictoryPie } from 'victory-native';

import { categories } from '../../shared/utils/categories';
import HistoryCard from '../../components/HistoryCard';
import { TransactionsInterface } from '../../shared/interfaces/transactions';

import {
  BodyArea,
  ChartArea,
  Header,
  HistoriesList,
  ResumeContainer,
  Title,
} from './style';
import { useTheme } from 'styled-components';

interface AmountByCategory {
  category: string;
  amount: number;
  percentage: string;
  color: string;
}

export default function Resume() {
  const [amountsByCategory, setAmountsByCategory] = useState<
    AmountByCategory[]
  >([]);

  const theme = useTheme();

  async function loadTransactions() {
    const response = await AsyncStorage.getItem(
      '@finances:transactions'
    );
    const dataTransactions = response ? JSON.parse(response!) : [];

    const totalAmount = dataTransactions
      .filter(
        (item: TransactionsInterface) =>
          item.transactionType === 'down'
      )
      .reduce(
        (acc: any, curr: TransactionsInterface) =>
          acc + Number(curr.price),
        0
      );

    const categoriesFiltered = dataTransactions
      .map((item: TransactionsInterface) => item.category)
      .filter(
        (value: string, index: number, self: string[]) =>
          value !== 'salary' && self.indexOf(value) === index
      );

    const result = categoriesFiltered.map((category: string) => {
      const categoryAmount = dataTransactions
        .filter(
          (transaction: TransactionsInterface) =>
            transaction.transactionType === 'down' &&
            transaction.category === category
        )
        .reduce(
          (acc: any, curr: TransactionsInterface) =>
            acc + Number(curr.price),
          0
        );

      const categoryPercentage = (
        (categoryAmount / totalAmount) *
        100
      ).toFixed(0);

      return {
        category,
        amount: categoryAmount,
        percentage: `${categoryPercentage}%`,
        color: categories.filter(
          (categoryFound) => categoryFound.key === category
        )[0].color,
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
        <ChartArea>
          <VictoryPie
            data={amountsByCategory}
            x="percentage"
            y="amount"
            colorScale={amountsByCategory.map(
              (category) => category.color
            )}
            labelRadius={50}
            style={{
              labels: {
                fontSize: '16px',
                fontWeight: 'bold',
                fill: theme.colors.blueGrey,
              },
            }}
          />
        </ChartArea>
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
