import Select from 'react-select';
import styled from 'styled-components';

export const FilterField = ({
  id,
  placeholder,
  onChange,
  options = [],
  value = ''
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: '100px',
      borderRadius: '10px',
      backgroundColor: 'rgb(81, 225, 124)',
      border: 'none',
      boxShadow: '0px 0px 12px rgba(81, 150, 220, 0.8)'
    }),
    selectMenu: (provided) => ({
      ...provided,
      backgroundColor: 'red'
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '10px',
      backgroundColor: state.isSelected
        ? 'rgb(81, 150, 220)'
        : state.isFocused
        ? 'rgb(81, 225, 124)'
        : 'white',
      color: state.isSelected ? 'white' : 'black'
    }),
    input: (provided) => ({
      ...provided,
      color: 'rgba(81, 0, 220, 1)'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'rgba(81, 0, 220, 1)'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'rgba(81, 120, 220, 1)',
      padding: '0px'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(81, 120, 220, 1)'
    })
  };

  const selectedOption = options.find((option) => option.value === value);
  return (
    <>
      {options.length > 0 ? (
        <Select
          id={id}
          value={selectedOption || null}
          onChange={onChange}
          styles={customStyles}
          options={options}
        />
      ) : (
        <>
          <StyledLabel htmlFor={id} aria-label={id} />
          <StyledInput
            value={value}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
          />
        </>
      )}
    </>
  );
};

const StyledInput = styled.input`
  padding: 8px 5px;
  border: none;
  border-radius: 10px;
  background-color: rgb(81, 225, 124);
  box-shadow: 0px 0px 12px rgba(81, 150, 220, 0.8);
  font-size: 14px;
  color: rgba(81, 0, 220, 1);

  &::placeholder {
    color: rgba(81, 130, 220, 1);
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0, 0, 0, 0); /* скрывает элемент от зрительного восприятия */
  overflow: hidden;
`;
