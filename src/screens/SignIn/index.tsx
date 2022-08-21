import React from 'react';
import SignInSocialButton from '../../components/SignInSocialButton';

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
