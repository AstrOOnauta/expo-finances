import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonTitle } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonContainer onPress={props.onPress} activeOpacity={0.6}>
      <ButtonTitle>{props.title}</ButtonTitle>
    </ButtonContainer>
  );
}
