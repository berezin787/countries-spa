import { ColorMode } from '@chakra-ui/react';
import { CSSObjectWithLabel, OptionProps, MenuProps } from 'react-select';

interface IReactSelectStyles {
  option: (provided: CSSObjectWithLabel, state: OptionProps, colorMode: ColorMode) => CSSObjectWithLabel,
  menu: (provided: CSSObjectWithLabel, state: MenuProps, colorMode: ColorMode) => CSSObjectWithLabel,
  clearIndicator: (provided: CSSObjectWithLabel) => CSSObjectWithLabel,
  indicatorSeparator: (provided: CSSObjectWithLabel) => CSSObjectWithLabel,
}

export const reactSelectStyles: IReactSelectStyles = {
  option: (provided: CSSObjectWithLabel, state: OptionProps, colorMode: ColorMode): CSSObjectWithLabel => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isSelected
      ? ((colorMode === 'light') ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)')
      : 'inherit',
    padding: '0.5rem 1.5rem',
  }),
  clearIndicator: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...provided,
    padding: '8px',
  }),
  indicatorSeparator: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
    ...provided,
    backgroundColor: 'hsl(0, 0%, 80%)',
    marginTop: '8px',
    marginBottom: '8px',
    marginRight: '8px',
  }),
  menu: (provided: CSSObjectWithLabel, _: MenuProps, colorMode: ColorMode): CSSObjectWithLabel => ({
    ...provided,
    background: 'var(--chakra-colors-chakra-body-bg)',
    borderRadius: '0.5rem',
    boxShadow: `var(--chakra-shadows-${colorMode})`,
    left: '-1.5rem',
    marginTop: '1rem',
  }),
};
