import React, { useState } from 'react';
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import RadioButton from '../../components/Forms/RadioButton';
import Select from '../../components/Forms/Select';

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
  const [category, setCategory] = useState<string>('Category');

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
          <Select title={category} />
        </TransactionInfoArea>
        <Button />
      </Form>
    </CreateTransactionContainer>
  );
}
