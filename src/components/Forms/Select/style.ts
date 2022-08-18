import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const SelectContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${(props)=>props.theme.colors.white};
  border-radius: 4px;
  margin-top: 8px;
`

export const Title = styled.Text`
  font-family: ${(props)=>props.theme.fonts.normal};
`

export const Icon = styled(Feather)`
  font-size: 18px;
`