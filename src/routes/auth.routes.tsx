import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';

export function AuthRoutes() {
  const navigation = createStackNavigator();

  return (
    <navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <navigation.Screen name="SignIn" component={SignIn} />
    </navigation.Navigator>
  );
}
