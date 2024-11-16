import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScaleFade, SimpleGrid, Text, useColorMode } from '@chakra-ui/react';
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
      <ScaleFade in={!isLoading && !countries.length} unmountOnExit={true} initialScale={0.4}>
        <Text align='center' fontSize='xl' mt={10}>Countries not found :(</Text>
      </ScaleFade>
      <ScaleFade in={!!countries.length} initialScale={0.8}>
        <SimpleGrid
          className={classNames(styles.countries)}
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={{ base: '2rem', lg: '3rem', xl: '4rem' }}
        >
          { countries.map((country: ICountry) => (
            <Country
              key={country.name.official}
              country={country}
              colorMode={colorMode}
              onClick={() => navigate(`/country/${country.name.official}`)}
            />))}
        </SimpleGrid>
      </ScaleFade>
    </>
  );
};
