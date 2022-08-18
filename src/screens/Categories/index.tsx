import { Dispatch, SetStateAction } from 'react';
import { FlatList, StatusBar } from 'react-native';

import Button from '../../components/Forms/Button';
import {
  CategoriesContainer,
  CategoryButton,
  CategoryButtonIcon,
  CategoryButtonTitle,
  Form,
  Header,
  Title,
} from './style';
import { categories } from '../../shared/utils/categories';

interface CategoriesProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

export default function Categories(props: CategoriesProps) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <CategoriesContainer>
        <Header>
          <Title>Select a category</Title>
        </Header>
        <Form>
          <FlatList
            data={categories}
            renderItem={({ item, index }) => {
              return (
                <CategoryButton
                  key={index}
                  category={props.category}
                  color={item.color}
                  isActive={props.category === item.key}
                  activeOpacity={0.6}
                  onPress={() => props.setCategory(item.key)}
                >
                  <CategoryButtonIcon
                    name={item.icon}
                    category={props.category}
                    isActive={props.category === item.key}
                    color={item.color}
                  />
                  <CategoryButtonTitle
                    category={props.category}
                    isActive={props.category === item.key}
                    color={item.color}
                  >
                    {item.name}
                  </CategoryButtonTitle>
                </CategoryButton>
              );
            }}
          />
          <Button
            title="Select"
            onPress={() => props.setOpenModal(false)}
          />
        </Form>
      </CategoriesContainer>
    </>
  );
}
