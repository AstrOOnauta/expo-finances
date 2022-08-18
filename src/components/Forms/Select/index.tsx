import { Icon, SelectContainer, Title } from './style';

interface SelectProps {
  title: string;
}

export default function Select(props: SelectProps) {
  return (
    <SelectContainer activeOpacity={0.6}>
      <Title>{props.title}</Title>
      <Icon name="chevron-down" />
    </SelectContainer>
  );
}
