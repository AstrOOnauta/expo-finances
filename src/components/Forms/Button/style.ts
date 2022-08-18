import styled from "styled-components/native";


export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${(props)=>props.theme.colors.yellow};
  padding: 16px;
  border-radius: 4px;
  align-items: center;
`

export const ButtonTitle = styled.Text`
  color: ${(props)=>props.theme.colors.white};
  font-family: ${(props)=>props.theme.fonts.medium} ;

`