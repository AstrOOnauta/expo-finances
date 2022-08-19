import { TextInputProps } from 'react-native';
import { InputContainer } from './style';

interface InputProps extends TextInputProps {
  title: string;
}

export default function Input(props: InputProps) {
  return (
    <InputContainer
      onChangeText={props.onChangeText}
      value={props.value}
      keyboardType={props.keyboardType}
      placeholder={props.title}
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
    />
  );
}
