import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'; 
import { RFPercentage } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "up" | "down"
}

export const TransactionContainer = styled.View`
  width: 100%;
  padding: ${RFPercentage(2)}px;
  background-color: ${(props)=>props.theme.colors.white};
  border-radius: 4px;
  margin-bottom: ${RFPercentage(2)}px;
`

export const TransactionTitle = styled.Text`
  font-family: ${(props)=>props.theme.fonts.normal};

`

export const TransactionAmount = styled.Text<TypeProps>`
  font-family: ${(props)=>props.theme.fonts.medium};
  font-size: 20px;
  color: ${(props)=>props.type === "up"? props.theme.colors.green:props.theme.colors.red}
`

export const TransactionFooter = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled(Feather)`
  font-size: 18px;
  color: ${(props)=>props.theme.colors.grey};

`

export const TransactionType = styled.Text`
  color: ${(props)=>props.theme.colors.grey};

`

export const TransactionDate = styled.Text`
  color: ${(props)=>props.theme.colors.grey};
`