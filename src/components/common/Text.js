import styled from 'styled-components';

export const Text = ({
  className,
  children,
  style,
  color = '#ccc',
  fontSize = '16px'
}) => {
  return (
    <StyledText
      className={className}
      style={style}
      _color={color}
      _fontSize={fontSize}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  color: ${({ _color }) => _color};
  font-size: ${({ _fontSize }) => _fontSize};

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
