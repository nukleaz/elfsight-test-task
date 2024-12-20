import styled from 'styled-components';
import widgetLogo from '../../assets/widget-logo.png';

export const Logo = () => {
  return <StyledLogo src={widgetLogo} alt="logo" />;
};

const StyledLogo = styled.img`
  max-width: 300px;
  user-select: none;

  ${window.screen.width < 930 && 'margin-bottom: 20px'};
`;
