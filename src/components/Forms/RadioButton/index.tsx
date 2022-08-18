import { TouchableOpacityProps } from 'react-native';
import { Icon, RadioButtonContainer, Title } from './style';

interface RadioButtonProps extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

export default function RadioButton(props: RadioButtonProps) {
  return (
    <RadioButtonContainer
      onPress={props.onPress}
      type={props.type}
      isActive={props.isActive}
      activeOpacity={0.6}
    >
      <Icon name={icon[props.type]} type={props.type} />
      <Title>{props.title}</Title>
    </RadioButtonContainer>
  );
}
