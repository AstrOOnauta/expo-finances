import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";


export const CreateTransactionContainer = styled.SafeAreaView`
  flex:1;
  background-color: ${(props)=>props.theme.colors.blueGrey};
  width: 100%;
  
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

export const TransactionInfoArea = styled.View``

export const ButtonsArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`