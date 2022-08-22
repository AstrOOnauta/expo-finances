import { NoDataContainer, NoDataIcon, NoDataTitle } from './style';

export default function NoData() {
  return (
    <NoDataContainer>
      <NoDataIcon name="image-search" />
      <NoDataTitle>Not found data here...</NoDataTitle>
    </NoDataContainer>
  );
}
