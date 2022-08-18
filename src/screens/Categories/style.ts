import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

interface ItemProps {
  category: string
  color: string
  isActive: boolean

}

export const CategoriesContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props)=>props.theme.colors.blueGrey};
`

export const Header = styled.View`
  background-color: ${(props)=>props.theme.colors.black};
  height: ${RFPercentage(10)}px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color:${(props)=>props.theme.colors.white};
  font-family: ${(props)=>props.theme.fonts.medium};
  font-size: 16px;
`

export const Form = styled.View`
  flex:1;
  padding: ${RFPercentage(2.5)}px;
  justify-content: space-between;

`

export const CategoryButton = styled.TouchableOpacity<ItemProps>`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: ${(props)=> props.isActive? props.color: props.theme.colors.black};
  background-color: ${(props)=>props.theme.colors.white};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const CategoryButtonIcon = styled(Feather)<ItemProps>`
  font-size: 22px;
  margin-right: 16px;
  color:  ${(props)=> props.isActive? props.color: props.theme.colors.black};
`

export const CategoryButtonTitle = styled.Text<ItemProps>`
  font-family: ${(props)=>props.theme.fonts.medium};
  color:  ${(props)=> props.isActive? props.color: props.theme.colors.black};
`