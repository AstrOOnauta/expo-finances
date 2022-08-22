import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import AuthContext from '../shared/context/AuthContext';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user.id === '' ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
