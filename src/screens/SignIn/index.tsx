import React, { useContext } from 'react';
import { Alert } from 'react-native';
import SignInSocialButton from '../../components/SignInSocialButton';
import AuthContext from '../../shared/context/AuthContext';

import {
  AboutArea,
  AboutText,
  ButtonsArea,
  LoginInfo,
  Logo,
  LogoArea,
  LogoTitle,
  SignInContainer,
} from './style';

export default function SignIn() {
  const { user, signInWithGoogle } = useContext(AuthContext);

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Error trying to connect to google account!');
    }
  }

  return (
    <SignInContainer>
      <AboutArea>
        <LogoArea>
          <Logo
            resizeMethod="resize"
            source={require('../../shared/assets/logo.png')}
          />
          <LogoTitle>Meteor Finances</LogoTitle>
        </LogoArea>
        <AboutText>Control your finances in a simple way</AboutText>
        <LoginInfo>Log in with one of the accounts below</LoginInfo>
      </AboutArea>
      <ButtonsArea>
        <SignInSocialButton
          onPress={handleSignInWithGoogle}
          logo="https://logopng.com.br/logos/google-37.png"
          title="Sign in with Google"
        />
        <SignInSocialButton
          logo="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1.png"
          title="Sign in with Apple"
        />
      </ButtonsArea>
    </SignInContainer>
  );
}
