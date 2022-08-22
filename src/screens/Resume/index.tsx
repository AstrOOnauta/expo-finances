import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { VictoryPie } from 'victory-native';

import { categories } from '../../shared/utils/categories';
import HistoryCard from '../../components/HistoryCard';
import { TransactionsInterface } from '../../shared/interfaces/transactions';

import {
  BodyArea,
  ChartArea,
  Header,
  HistoriesList,
  MonthlyFilterArea,
  MonthTitle,
  NextIcon,
  NextMonthButton,
  NoDataArea,
  NoDataIcon,
  NoDataTitle,
  PreviousIcon,
  PreviousMonthButton,
  ResumeContainer,
  Title,
} from './style';
import { useTheme } from 'styled-components';
import { addMonths, subMonths } from 'date-fns';
import { format } from 'date-fns/esm';
import { Text } from 'react-native';
import AuthContext from '../../shared/context/AuthContext';

interface AmountByCategory {
  category: string;
  amount: number;
  percentage: string;
  color: string;
}

export default function Resume() {
  const { user } = useContext(AuthContext);

  const [amountsByCategory, setAmountsByCategory] = useState<
    AmountByCategory[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const theme = useTheme();

  function handleDateChange(action: 'prev' | 'next') {
    if (action === 'prev') {
      setSelectedDate(subMonths(selectedDate, 1));
    } else {
      setSelectedDate(addMonths(selectedDate, 1));
    }
  }

  async function loadTransactions() {
    const response = await AsyncStorage.getItem(
      `@meteor-finances:transactions_user:${user.id}`
    );
    const dataTransactions = response ? JSON.parse(response!) : [];

    const totalAmount = dataTransactions
      .filter(
        (item: TransactionsInterface) =>
          item.transactionType === 'down' &&
          new Date(item.date).getMonth() ===
            selectedDate.getMonth() &&
          new Date(item.date).getFullYear() ===
            selectedDate.getFullYear()
      )
      .reduce(
        (acc: any, curr: TransactionsInterface) =>
          acc + Number(curr.price),
        0
      );

    const categoriesFiltered = dataTransactions
      .map((item: TransactionsInterface) => {
        if (
          new Date(item.date).getMonth() ===
            selectedDate.getMonth() &&
          new Date(item.date).getFullYear() ===
            selectedDate.getFullYear()
        ) {
          return item.category;
        }
      })
      .filter(
        (value: string, index: number, self: string[]) =>
          value !== 'salary' && self.indexOf(value) === index
      );

    const result = categoriesFiltered[0]
      ? categoriesFiltered.map((category: string) => {
          const categoryAmount = dataTransactions
            .filter(
              (transaction: TransactionsInterface) =>
                transaction.transactionType === 'down' &&
                new Date(transaction.date).getMonth() ===
                  selectedDate.getMonth() &&
                new Date(transaction.date).getFullYear() ===
                  selectedDate.getFullYear() &&
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
            color: category
              ? categories.filter(
                  (categoryFound) => categoryFound.key === category
                )[0].color
              : '#FFFFFF',
          };
        })
      : [];

    setAmountsByCategory(result);
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [selectedDate])
  );

  return (
    <ResumeContainer>
      <Header>
        <Title>Resume</Title>
      </Header>
      <BodyArea>
        <MonthlyFilterArea>
          <PreviousMonthButton
            onPress={() => handleDateChange('prev')}
          >
            <PreviousIcon name="chevron-left" />
          </PreviousMonthButton>
          <MonthTitle>
            {format(selectedDate, 'MMMM, yyyy')}
          </MonthTitle>
          <NextMonthButton onPress={() => handleDateChange('next')}>
            <NextIcon name="chevron-right" />
          </NextMonthButton>
        </MonthlyFilterArea>
        {amountsByCategory.length === 0 ? (
          <NoDataArea>
            <NoDataIcon name="image-search" />
            <NoDataTitle>Not found data here...</NoDataTitle>
          </NoDataArea>
        ) : (
          <>
            <ChartArea>
              <VictoryPie
                data={amountsByCategory}
                x="percentage"
                y="amount"
                colorScale={amountsByCategory.map(
                  (category) => category.color
                )}
                labelRadius={80}
                style={{
                  labels: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fill: theme.colors.blueGrey,
                  },
                }}
              />
            </ChartArea>
            <HistoriesList showsVerticalScrollIndicator={false}>
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
          </>
        )}
      </BodyArea>
    </ResumeContainer>
  );
}
