import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";


export const SignInContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${props=>props.theme.colors.yellow};
`

export const AboutArea = styled.View`
  background-color: ${props=>props.theme.colors.black};
  height: ${RFPercentage(70)}px;
  padding: 0 40px;
`

export const LogoArea = styled.View`
  height: ${RFPercentage(35)}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
`

export const LogoTitle = styled.Text`
  color: ${props=>props.theme.colors.yellow};
  font-family: ${props=>props.theme.fonts.medium};
  font-size: 16px;
  margin-left: 8px;
`

export const AboutText = styled.Text`
  color: ${props=>props.theme.colors.white};
  font-family: ${props=>props.theme.fonts.bold};
  font-size: 32px;

`

export const LoginInfo = styled.Text`
  color: ${props=>props.theme.colors.white};
  font-family: ${props=>props.theme.fonts.normal};
  font-size: 14px;
  margin: 16px 0;
`

export const ButtonsArea = styled.View`
  margin-top: -26px;
  padding: 0 40px;
`