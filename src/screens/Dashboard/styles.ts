import styled from "styled-components/native";
import {RFPercentage} from "react-native-responsive-fontsize"

export const DashboardContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props)=>props.theme.colors.blueGrey};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
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

export const SummaryCards = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingVertical: 10, paddingHorizontal: 10 }
})`
  position: absolute;
  margin-top: ${RFPercentage(12)}px;
`

export const TransactionsTitle = styled.Text`
  font-family: ${(props)=>props.theme.fonts.medium};
  margin: ${RFPercentage(12)}px ${RFPercentage(3.5)}px ${RFPercentage(2)}px ${RFPercentage(3.5)}px;
`

export const TransactionCards = styled.FlatList`
  flex: 1;
  width: 100%;
  padding: 0 ${RFPercentage(3.5)}px;
`
