import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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

export const ChartArea = styled.View`
  width: 100%;
  align-items: center;
`

export const HistoriesList = styled.ScrollView`
  width: 100%;
`