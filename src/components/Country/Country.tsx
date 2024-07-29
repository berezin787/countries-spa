import { FC } from 'react';
import classNames from 'classnames';
import { Card, CardBody, CardHeader, Heading, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { ICountryProps } from './Country.props.interface';
import styles from './Country.module.css';

export const Country: FC<ICountryProps> = ({
  country,
  onClick,
  colorMode,
}) => {
  const titles: string[] = ['population', 'region', 'capital'];
  return (
    <Card
      onClick={onClick}
      boxShadow={colorMode}
    >
      <CardHeader p={0}>
        <Image
          className={classNames(styles.image)}
          src={country.flags.svg}
        />
      </CardHeader>
      <CardBody paddingBottom={8}>
        <Heading size='sm'>{country.name}</Heading>
        <List paddingTop={4} fontSize='sm'>
          { titles.map((title) => (
              <ListItem key={`${country.name}-${title}`}>
                <HStack>
                  <Text fontWeight='extrabold' textTransform='capitalize'>{title}:</Text>
                  <Text>{country[title] || ''}</Text>
                </HStack>
              </ListItem>
            )) }
        </List>
      </CardBody>
    </Card>
  );
};
