import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from "styled-components/native"

export const NoDataContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const NoDataIcon = styled(MaterialCommunityIcons)`
  color:${(props)=>props.theme.colors.grey};
  font-size: 80px;
  margin-bottom: 16px;
`

export const NoDataTitle = styled.Text`
  color:${(props)=>props.theme.colors.grey};
  font-family: ${(props)=>props.theme.fonts.medium};
  font-size: 20px;
`
