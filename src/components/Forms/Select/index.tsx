import { TouchableOpacityProps } from 'react-native';
import { Icon, SelectContainer, Title } from './style';

interface SelectProps extends TouchableOpacityProps {
  title: string;
}

export default function Select(props: SelectProps) {
  return (
    <SelectContainer onPress={props.onPress} activeOpacity={0.6}>
      <Title>{props.title === '' ? 'Category' : props.title}</Title>
      <Icon name="chevron-down" />
    </SelectContainer>
  );
}
