import styled from "styled-components/native";

interface ColorProps{
  color: string
}

export const HistoryCardContainer = styled.View<ColorProps>`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 8px;
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: ${(props)=> props.color};
  background-color: ${(props)=>props.theme.colors.white};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const HistoryTitle = styled.Text`
  font-family: ${(props)=>props.theme.fonts.medium};
  font-size: 16px;
`

export const HistoryAmount = styled.Text`
  font-family: ${(props)=>props.theme.fonts.bold};
  font-size: 16px;
`