import { FC } from 'react';
import { Flex, Heading, HStack, Image, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import classNames from 'classnames';
import { ICountryInfoProps } from './CountryInfo.props.interface';
import styles from './CountryInfo.module.css';

export const CountryInfo: FC<ICountryInfoProps> = ({
  country,
  navigate,
  colorMode,
}) => {
  const aboutItems: Record<string, string> = {
    'Native Name': country.nativeName,
    'Population': country.population,
    'Region': country.region,
    'Sub Region': country.subregion,
    'Capital': country.capital,
  };
  return (
    <SimpleGrid
      className={classNames(styles['country-info'])}
      columns={{ base: 1, md: 2 }}
      gap={{ base: 8, md: 20 }}
      gridTemplateColumns={{
        base: '100%',
        md: 'minmax(100px, 400px) 1fr',
        lg: 'minmax(400px, 600px) 1fr',
      }}
    >
      <Image
        className={classNames(styles['country-info-image'])}
        src={country.flags.svg}
      />
      <Flex
        alignItems={{ md: 'flex-start' }}
        className={classNames(styles['country-info-body'])}
        justifyContent={{ md: 'flex-start' }}
      >
        <Heading size='lg' fontWeight='medium'>{country.name}</Heading>
        <Flex
          className={classNames(styles['country-info-about'])}
          flexDir={{ lg: 'row' }}
          gap={{ lg: 16 }}
        >
          <List>
            { Object.keys(aboutItems).map((title) => (
              <ListItem key={title}>
                <HStack>
                  <Text fontWeight='extrabold'>{title}: </Text>
                  <Text>{aboutItems[title] || ''}</Text>
                </HStack>
              </ListItem>
            )) }
          </List>
          <List>
            <ListItem>
              <HStack>
                <Text fontWeight='extrabold'>Top Level Domain: </Text>
                { country.topLevelDomain.map((tlD) => <Text key={tlD}>{tlD}</Text>) }
              </HStack>
            </ListItem>
            <ListItem>
              <HStack>
                <Text fontWeight='extrabold'>Currency: </Text>
                { country.currencies.map((currency) => <Text key={currency.code}>{currency.name}</Text>) }
              </HStack>
            </ListItem>
            <ListItem>
              <HStack>
                <Text fontWeight='extrabold'>Languages: </Text>
                { country.languages.map((lang) => <Text key={lang.name}>{lang.name}</Text>) }
              </HStack>
            </ListItem>
          </List>
        </Flex>
        <Flex
          className={classNames(styles['country-info-borders'])}
          flexDir={{ md: 'row' }}
        >
          <Text fontWeight='extrabold'>Border Countries</Text>
          { !country.borders?.length
            ? <Text>There is no border countries</Text>
            : (
              <Flex className={classNames(styles['country-border-group'])}>
                { country.borders.map((borderTag) => (
                  <Text
                    as='span'
                    boxShadow={colorMode}
                    className={classNames(styles['border-tag'])}
                    key={borderTag}
                    onClick={() => navigate(`/country/${borderTag}`)}
                  >{borderTag}</Text>
                )) }
              </Flex>
            )
          }
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};
