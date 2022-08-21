import styled, { css } from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize"
import { Feather } from '@expo/vector-icons';


interface TypeProps{
  type: "up" | "down" | "total"
}

export const SummaryContainer = styled.View<TypeProps>`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(24)}px;
  padding: ${RFPercentage(3)}px;
  margin-left: ${RFPercentage(2)}px;
  border-radius: 4px;

  background-color: ${(props)=>props.type === "total"?  props.theme.colors.yellow : props.theme.colors.white
  }
`

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderTitle = styled.Text`
font-family: ${(props)=>props.theme.fonts.normal};
`

export const HeaderIcon = styled(Feather)<TypeProps>`
  font-size: 32px;

  ${(props)=>props.type === "up" && css`
    color: ${(props)=>props.theme.colors.green}
  `};

  ${(props)=>props.type === "down" && css`
    color: ${(props)=>props.theme.colors.red}
  `};

  ${(props)=>props.type === "total" && css`
    color: ${(props)=>props.theme.colors.black}
  `};
`

export const BodyArea = styled.View` 
  margin-top: ${RFPercentage(4)}px;
  align-items: flex-start;
`

export const BodyTitle = styled.Text<TypeProps>`
  font-family: ${(props)=>props.theme.fonts.medium};
  line-height: 30px;
  font-size: 26px;

  ${(props)=>props.type === "total" && css`
    color: ${(props)=>props.theme.colors.white}
  `};
`

export const BodyText = styled.Text<TypeProps>`
font-family: ${(props)=>props.theme.fonts.medium};
font-size: 12px;
color: ${(props)=>props.theme.colors.grey};
margin-left: -2px;

${(props)=>props.type === "total" && css`
    color: ${(props)=>props.theme.colors.black}
  `};

`