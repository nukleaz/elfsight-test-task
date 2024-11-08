import styled from 'styled-components';

export function InputField({ id, label, placeholder }) {
  return (
    <>
      <StyledLabel htmlFor={id} aria-label={label} />
      <StyledInput id={id} placeholder={placeholder} />
    </>
  );
}

const StyledLabel = styled.label``;

const StyledInput = styled.input``;
