import { FC } from 'react';
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
import { ISearchProps } from './Search.props.interface';
import styles from './Search.module.css';

export const Search: FC<ISearchProps> = ({ search, setSearch, handleChangeSearch }) => {
  const { colorMode } = useColorMode();
  const [searchInputId] = useIds('input', 'search');

  return (
    <chakra.label
      htmlFor={searchInputId}
      className={classNames(styles.search)}
      boxShadow={colorMode}
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
          value={search}
          onChange={handleChangeSearch}
        />
        { search?.length && (
          <InputRightElement>
            <IconButton
              aria-label='Clear country filter'
              icon={<CloseIcon />}
              onClick={() => setSearch('')}
              fontSize='x-small'
              variant='unstyled'
            />
          </InputRightElement>
        ) }
      </InputGroup>
    </chakra.label>
  );
};
