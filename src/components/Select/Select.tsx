import { FC } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { default as ReactSelect } from 'react-select';
import classNames from 'classnames';
import { ISelectProps } from './Select.props.interface';
import { reactSelectStyles as selectStyles } from './react-select.styles';
import styles from './Select.module.css';

export const Select: FC<ISelectProps> = ({
  options,
  onChange,
  placeholder,
  value,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      boxShadow={colorMode}
      className={classNames(styles['select-wrapper'])}
      w={{ md: '3xs' }}
    >
      <ReactSelect
        onChange={(newValue) => onChange(newValue as { label: string; value: string })}
        styles={{
          option: (provided, state) => selectStyles.option(provided, state, colorMode),
          clearIndicator: selectStyles.clearIndicator,
          indicatorSeparator: selectStyles.indicatorSeparator,
          menu: (provided, state) => selectStyles.menu(provided, state, colorMode),
        }}
        isSearchable={false}
        isClearable={true}
        options={options}
        placeholder={placeholder}
        unstyled
        value={value}
      />
    </Box>
  );
};
