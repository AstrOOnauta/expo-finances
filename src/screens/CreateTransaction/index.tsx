import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

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
import { Controller, FieldValues, useForm } from 'react-hook-form';

export default function CreateTransaction() {
  const [transactionType, setTransactionType] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);

  const { control, handleSubmit } = useForm();

  function handleTransactionType(type: string) {
    setTransactionType(type);
  }

  function onSubmit(form: FieldValues) {
    if (
      category === '' ||
      transactionType === '' ||
      !form.price ||
      !form.transaction
    ) {
      return Alert.alert('Error', 'Fill all form fields!');
    }

    if (form.price < 0 || typeof form.price === 'string') {
      return Alert.alert('Error', 'Inform a valid price!');
    }

    const newTransaction = {
      ...form,
      transactionType,
      category,
      date: new Date(),
    };

    console.log(newTransaction);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <CreateTransactionContainer>
        <Header>
          <Title>Create a transaction</Title>
        </Header>
        <Form>
          <TransactionInfoArea>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  title="Transaction"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="sentences"
                  autoCorrect={false}
                />
              )}
              name="transaction"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  title="Price"
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              )}
              name="price"
            />
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
          <Button title="Add" onPress={handleSubmit(onSubmit)} />
        </Form>
        <Modal visible={isCategoryModalOpen}>
          <Categories
            setOpenModal={setIsCategoryModalOpen}
            category={category}
            setCategory={setCategory}
          />
        </Modal>
      </CreateTransactionContainer>
    </TouchableWithoutFeedback>
  );
}
