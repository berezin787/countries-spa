import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimpleGrid, useColorMode } from '@chakra-ui/react';
import classNames from 'classnames';
import { ICountry } from '../../interfaces/country.interface';
import { ICountriesProps } from './Countries.props.interface';
import { Country } from '../';
import styles from './Countries.module.css';

export const Countries: FC<ICountriesProps> = ({ countries }) => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid
      className={classNames(styles.countries)}
      columns={{ base: 1, md: 2, lg: 4 }}
      gap={{ base: '2rem', lg: '3rem', xl: '4rem' }}
    >
      { countries && countries.map((country: ICountry) => (
        <Country
          key={country.name.common}
          country={country}
          colorMode={colorMode}
          onClick={() => navigate(`/country/${country.name.common}`)}
        />
      )) }
    </SimpleGrid>
  );
};
