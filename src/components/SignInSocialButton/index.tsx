import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  ButtonText,
  ButtonTextArea,
  SignInSocialButtonContainer,
  SocialIcon,
} from './style';

interface SignInSocialButtonProps extends TouchableOpacityProps {
  logo: string;
  title: string;
}

export default function SignInSocialButton(
  props: SignInSocialButtonProps
) {
  return (
    <SignInSocialButtonContainer
      activeOpacity={0.6}
      onPress={props.onPress}
    >
      <SocialIcon resizeMode="contain" source={{ uri: props.logo }} />
      <ButtonTextArea>
        <ButtonText>{props.title}</ButtonText>
      </ButtonTextArea>
    </SignInSocialButtonContainer>
  );
}
