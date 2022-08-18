import { InputContainer } from './style';

interface InputProps {
  title: string;
}

export default function Input(props: InputProps) {
  return <InputContainer placeholder={props.title} />;
}
