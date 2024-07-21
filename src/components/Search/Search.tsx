import { ChangeEvent, FC, useState } from 'react';
import classNames from 'classnames';
import {
  chakra,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorMode,
  useIds
} from '@chakra-ui/react';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import styles from './Search.module.css';

export const Search: FC = () => {
  const { colorMode } = useColorMode();
  const [searchInputId] = useIds('input', 'search');
  const [country, setCountry] = useState<string>('');

  const handleChangeCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <chakra.label
      htmlFor={searchInputId}
      className={classNames(styles.search)}
      boxShadow={colorMode}
      lineHeight={10}
      marginBottom={{ md: '0' }}
      w={{ md: 'xs' }}
    >
      <InputGroup>
        <InputLeftElement>
          <Search2Icon />
        </InputLeftElement>
        <Input
          id={searchInputId}
          type='text'
          variant='unstyled'
          placeholder='Search for a country'
          textIndent='1rem'
          value={country}
          onChange={handleChangeCountry}
        />
        { country?.length && (
          <InputRightElement>
            <IconButton
              aria-label='Clear country filter'
              icon={<CloseIcon />}
              onClick={() => setCountry('')}
              fontSize='x-small'
              variant='unstyled'
            />
          </InputRightElement>
        ) }
      </InputGroup>
    </chakra.label>
  );
};
