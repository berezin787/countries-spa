import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimpleGrid, Text, useColorMode } from '@chakra-ui/react';
import classNames from 'classnames';
import { ICountry } from '../../interfaces/country.interface';
import { ICountriesProps } from './Countries.props.interface';
import { Country } from '../';
import styles from './Countries.module.css';

export const Countries: FC<ICountriesProps> = ({
  countries,
  isLoading,
}) => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <>
      { !isLoading && !countries.length && <Text mt={10} align='center'>Countries not found :( </Text> }
      <SimpleGrid
        className={classNames(styles.countries)}
        columns={{ base: 1, md: 2, lg: 4 }}
        gap={{ base: '2rem', lg: '3rem', xl: '4rem' }}
      >
        { !!countries.length &&
          countries.map((country: ICountry) => (
            <Country
              key={country.name.common}
              country={country}
              colorMode={colorMode}
              onClick={() => navigate(`/country/${country.name.common}`)}
            />
          )) }
      </SimpleGrid>
    </>
  );
};
