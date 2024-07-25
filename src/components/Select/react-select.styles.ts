import { ColorMode } from '@chakra-ui/react';
import { StylesConfig } from 'react-select';

export const reactSelectStyles = {
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
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
    padding: '0.5rem 1.5rem',
    width: 'calc(3rem + 100%)',
  }),
} as StylesConfig;
