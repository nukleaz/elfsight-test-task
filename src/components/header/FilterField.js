import styled from 'styled-components';

export const FilterField = ({
  id,
  label,
  placeholder,
  onChange,
  options = [],
  value = ''
}) => {
  return (
    <>
      <StyledLabel htmlFor={id} aria-label={label} />
      {options.length > 0 ? (
        <StyledSelect id={id} value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <StyledInput
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

const StyledLabel = styled.label``;

const StyledInput = styled.input``;

const StyledSelect = styled.select``;
