
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface TypesProps {
  type: 'up' | 'down';
  isActive: boolean;
}

export const RadioButtonContainer = styled.TouchableOpacity<TypesProps>`
  width: 48%;
  padding: 16px;
  background-color: ${(props)=>props.theme.colors.white};
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props)=>props.isActive && props.type === "up" && css`
  background-color: rgba(18,164,84,.4);
    opacity: .7;
    border: none; 
  ` }
  ${(props)=>props.isActive && props.type === "down" && css`
    background-color: rgba(232,63,91,.4);
    opacity: .7;
    border: none;
  ` }
`

export const Icon = styled(Feather)<TypesProps>`
  font-size: 24px;
  margin-right: 8px;
  color: ${(props)=>props.type === "up" ? props.theme.colors.green : props.theme.colors.red};
`

export const Title = styled.Text`
  font-family: ${(props)=>props.theme.fonts.medium};
`