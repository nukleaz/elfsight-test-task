import styled from 'styled-components';
import { FilterContainer } from './FilterContainer';
import { Logo } from './Logo';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <FilterContainer />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
