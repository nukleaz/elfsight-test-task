import styled from 'styled-components';
import { useData } from '../providers';
import { FilterField } from './InputField';

export function FilterContainer() {
  const { setFilters, setActivePage } = useData();

  function handleFilterChange(name, value) {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setActivePage(0);
  }

  return (
    <StyledContainer>
      <FilterField
        id="name"
        placeholder="Name"
        onChange={(e) => handleFilterChange('name', e.target.value)}
      />
      <FilterField
        id="species"
        placeholder="Species"
        onChange={(e) => handleFilterChange('species', e.target.value)}
      />
      <FilterField
        id="type"
        placeholder="Type"
        onChange={(e) => handleFilterChange('type', e.target.value)}
      />
      <FilterField
        defaultValue="Status"
        options={[
          { value: '', label: 'Select Status' },
          { value: 'Alive', label: 'Alive' },
          { value: 'Dead', label: 'Dead' },
          { value: 'unknown', label: 'unknown' }
        ]}
        onChange={(e) => handleFilterChange('status', e.target.value)}
      />
      <FilterField
        defaultValue="Gender"
        options={[
          { value: '', label: 'Select Gender' },
          { value: 'Female', label: 'Female' },
          { value: 'Male', label: 'Male' },
          { value: 'Genderless', label: 'Genderless' },
          { value: 'unknown', label: 'unknown' }
        ]}
        onChange={(e) => handleFilterChange('gender', e.target.value)}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  gap: 15px;
`;
