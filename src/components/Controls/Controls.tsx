import { FC } from 'react';
import classNames from 'classnames';
import { Flex } from '@chakra-ui/react';
import { Search, Select } from '../';
import { RegionOptionsType } from '../../types/region.types';
import { IControlsProps } from './Controls.props.interface';
import styles from './Controls.module.css';

const optionsMap: RegionOptionsType = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
};

const selectOptions = Object.values(optionsMap);

export const Controls: FC<IControlsProps> = ({
  region,
  search,
  setSearch,
  handleChangeRegion,
  handleChangeSearch,
}) => {
  return (
    <Flex
      className={classNames(styles.controls)}
      flexDir={{ md: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent={{ md: 'space-between' }}
      lineHeight={10}
    >
      <Search search={search} setSearch={setSearch} handleChangeSearch={handleChangeSearch} />
      <Select
        options={selectOptions}
        onChange={handleChangeRegion}
        placeholder='Filter by Region'
        value={region === null ? null : optionsMap[region]}
      />
    </Flex>
  );
};
