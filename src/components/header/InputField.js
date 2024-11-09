import styled from 'styled-components';

export function FilterField({
  id,
  label,
  placeholder,
  onChange,
  defaultValue,
  options = []
}) {
  return (
    <>
      <StyledLabel htmlFor={id} aria-label={label} />
      {options.length > 0 ? (
        <StyledSelect id={id} defaultValue={defaultValue} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <StyledInput id={id} placeholder={placeholder} onChange={onChange} />
      )}
    </>
  );
}

const StyledLabel = styled.label``;

const StyledInput = styled.input``;

const StyledSelect = styled.select``;
