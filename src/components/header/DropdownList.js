import styled from 'styled-components';

export function DropdownList({ defaultValue, options = [] }) {
  return (
    <StyledDropdown defaultValue={defaultValue}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  );
}

const StyledDropdown = styled.select``;
