import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize"

export const DashboardContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props)=>props.theme.colors.white};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  padding: ${RFPercentage(2)}px;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${(props)=>props.theme.colors.black};
`

export const Card = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserInfo = styled.View`
flex-direction: row;

`

export const Photo = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  margin-right: 20px;
`

export const Welcome = styled.View`
justify-content: flex-end;
`

export const Greeting = styled.Text`
  color: ${(props)=>props.theme.colors.white};
  font-family: ${(props)=>props.theme.fonts.normal};

`

export const UserName = styled.Text`
  color: ${(props)=>props.theme.colors.white};
  font-family: ${(props)=>props.theme.fonts.bold};

`

export const IconArea = styled.View`
flex-direction: row;
align-items: center;
`

export const EyeButton = styled.TouchableOpacity`

`

export const SignOutButton = styled.TouchableOpacity`
  margin-left: 20px;
`
