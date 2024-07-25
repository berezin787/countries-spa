import { ColorMode } from '@chakra-ui/react';
import { StylesConfig } from 'react-select';

export const reactSelectStyles = {
  option: (provided, state, colorMode: ColorMode) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isSelected
      ? ((colorMode === 'light') ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)')
      : 'inherit',
    padding: '0.5rem 1.5rem',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: '8px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'hsl(0, 0%, 80%)',
    marginTop: '8px',
    marginBottom: '8px',
    marginRight: '8px',
  }),
  menu: (provided, state, colorMode: ColorMode) => ({
    ...provided,
    borderRadius: '0.5rem',
    boxShadow: `var(--chakra-shadows-${colorMode})`,
    left: '-1.5rem',
    marginTop: '1rem',
  }),
} as StylesConfig;
