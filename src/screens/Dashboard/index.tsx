import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

import {
  Card,
  DashboardContainer,
  EyeButton,
  Greeting,
  Header,
  IconArea,
  Photo,
  SignOutButton,
  UserInfo,
  UserName,
  Welcome,
} from './styles';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header>
        <Card>
          <UserInfo>
            <Photo
              resizeMethod="resize"
              source={{
                uri: 'https://avatars.githubusercontent.com/u/81580470?v=4',
              }}
            />
            <Welcome>
              <Greeting>Hello,</Greeting>
              <UserName>Willian</UserName>
            </Welcome>
          </UserInfo>
          <IconArea>
            <EyeButton activeOpacity={0.6}>
              <Feather name="eye" size={24} color="#FBB034" />
            </EyeButton>
            <SignOutButton activeOpacity={0.6}>
              <Ionicons name="power" size={24} color="#FBB034" />
            </SignOutButton>
          </IconArea>
        </Card>
      </Header>
    </DashboardContainer>
  );
}
