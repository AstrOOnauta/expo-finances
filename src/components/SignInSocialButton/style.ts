import styled from "styled-components/native";

export const SignInSocialButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  background-color: ${(props)=>props.theme.colors.white};
  padding: 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const SocialIcon = styled.Image`
  width: 24px;
  height: 24px;
`

export const ButtonTextArea = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`


export const ButtonText = styled.Text`
    margin-right: 24px;

`