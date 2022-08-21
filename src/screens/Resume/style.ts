import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ResumeContainer = styled.SafeAreaView`
  flex:1;
  background-color: ${(props)=>props.theme.colors.blueGrey};
  width: 100%;
`

export const Header = styled.View`
  background-color: ${(props)=>props.theme.colors.black};
  height: ${RFPercentage(10)}px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color:${(props)=>props.theme.colors.white};
  font-family: ${(props)=>props.theme.fonts.medium};
  font-size: 16px;
`

export const BodyArea = styled.View`
  flex: 1;
  padding: 16px;
`

export const MonthlyFilterArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: -16px;
  z-index: 2;
`

export const PreviousMonthButton = styled.TouchableOpacity`
  padding: 24px;
`

export const PreviousIcon = styled(Feather)`
  font-size: 24px;
`

export const MonthTitle = styled.Text`
  font-family: ${(props)=>props.theme.fonts.medium};
  font-size: 20px;
`

export const NextMonthButton = styled.TouchableOpacity`
  padding: 24px;
`

export const NextIcon = styled(Feather)`
  font-size: 24px;
`

export const NoDataArea = styled.View`
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

export const ChartArea = styled.View`
  margin-top: -28px;
  width: 100%;
  align-items: center;
`

export const HistoriesList = styled.ScrollView`
  width: 100%;
`