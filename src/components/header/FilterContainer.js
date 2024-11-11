import styled from 'styled-components';
import { useData } from '../providers';
import { FilterField } from './FilterField';

export const FilterContainer = () => {
  const { onFilterChange, filters } = useData();

  const handleFilterChange = (value, name) => {
    onFilterChange(value, name);
  };

  return (
    <StyledContainer>
      <FilterField
        id="name"
        placeholder="Name"
        onChange={(e) => handleFilterChange('name', e.target.value)}
        value={filters.name}
      />
      <FilterField
        id="species"
        placeholder="Species"
        onChange={(e) => handleFilterChange('species', e.target.value)}
        value={filters.species}
      />
      <FilterField
        id="type"
        placeholder="Type"
        onChange={(e) => handleFilterChange('type', e.target.value)}
        value={filters.type}
      />
      <StyledSelectsContainer>
        <FilterField
          id="status"
          value={filters.status}
          options={[
            { value: '', label: 'Select Status' },
            { value: 'alive', label: 'Alive' },
            { value: 'dead', label: 'Dead' },
            { value: 'unknown', label: 'unknown' }
          ]}
          onChange={(select) => {
            handleFilterChange('status', select.value);
          }}
        />
        <FilterField
          id="gender"
          value={filters.gender}
          options={[
            { value: '', label: 'Select Gender' },
            { value: 'female', label: 'Female' },
            { value: 'male', label: 'Male' },
            { value: 'genderless', label: 'Genderless' },
            { value: 'unknown', label: 'unknown' }
          ]}
          onChange={(select) => handleFilterChange('gender', select.value)}
        />
      </StyledSelectsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const StyledSelectsContainer = styled.div`
  display: flex;
  gap: 15px;
`;
