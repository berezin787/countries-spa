import { FC, useState } from 'react';
import classNames from 'classnames';
import { Flex } from '@chakra-ui/react';
import { Search, Select } from '../';
import styles from './Controls.module.css';
import { Region, RegionOptionsType } from '../../types/region.types';

const optionsMap: RegionOptionsType = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
};

const selectOptions = Object.values(optionsMap);

export const Controls: FC = () => {
  const [region, setRegion] = useState<Region>(null);

  const handleChangeRegion = (option: { label: string, value: string } | null) => {
    setRegion(option?.value as Region || null);
  };

  return (
    <Flex
      className={classNames(styles.controls)}
      flexDir={{ md: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent={{ md: 'space-between' }}
      lineHeight={10}
    >
      <Search />
      <Select
        options={selectOptions}
        onChange={handleChangeRegion}
        placeholder='Filter by Region'
        value={optionsMap[region] || null}
      />
    </Flex>
  );
};
