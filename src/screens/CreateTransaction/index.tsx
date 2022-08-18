import React, { useState } from 'react';
import { Modal } from 'react-native';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import RadioButton from '../../components/Forms/RadioButton';
import Select from '../../components/Forms/Select';
import Categories from '../Categories';
import { categories } from '../../shared/utils/categories';

import {
  ButtonsArea,
  CreateTransactionContainer,
  Form,
  Header,
  Title,
  TransactionInfoArea,
} from './style';

export default function CreateTransaction() {
  const [transactionType, setTransactionType] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);

  function handleTransactionType(type: string) {
    setTransactionType(type);
  }

  return (
    <CreateTransactionContainer>
      <Header>
        <Title>Create a transaction</Title>
      </Header>
      <Form>
        <TransactionInfoArea>
          <Input title="Transaction" />
          <Input title="Price" />
          <ButtonsArea>
            <RadioButton
              type="up"
              title="Deposit"
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionType('up')}
            />
            <RadioButton
              type="down"
              title="withdraw"
              isActive={transactionType === 'down'}
              onPress={() => handleTransactionType('down')}
            />
          </ButtonsArea>
          <Select
            title={
              category === ''
                ? category
                : categories.filter(
                    (findedCategory) =>
                      category === findedCategory.key
                  )[0].name
            }
            onPress={() => setIsCategoryModalOpen(true)}
          />
        </TransactionInfoArea>
        <Button title="Add" />
      </Form>
      <Modal visible={isCategoryModalOpen}>
        <Categories
          setOpenModal={setIsCategoryModalOpen}
          category={category}
          setCategory={setCategory}
        />
      </Modal>
    </CreateTransactionContainer>
  );
}
