import styled from 'styled-components';
import { DropdownList } from './DropdownList';
import { InputField } from './InputField';

export function FilterContainer() {
  return (
    <StyledContainer>
      <InputField id="name" placeholder="Name" />
      <InputField id="species" placeholder="Species" />
      <InputField id="type" placeholder="Type" />
      <DropdownList
        defaultValue="Status"
        options={[
          { value: '', label: 'Select Status' },
          { value: 'Alive', label: 'Alive' },
          { value: 'Dead', label: 'Dead' },
          { value: 'unknown', label: 'unknown' }
        ]}
      />
      <DropdownList
        defaultValue="Gender"
        options={[
          { value: '', label: 'Select Gender' },
          { value: 'Female', label: 'Female' },
          { value: 'Male', label: 'Male' },
          { value: 'Genderless', label: 'Genderless' },
          { value: 'unknown', label: 'unknown' }
        ]}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  gap: 15px;
`;
