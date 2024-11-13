import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, ScaleFade, Text, useColorMode } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { CountryInfo } from '../../components/CountryInfo/CountryInfo';
import { useCountry, useNeighbours } from '../../hooks';

export const Details: FC = () => {
  const { country, isLoading } = useCountry();
  const { neighbours } = useNeighbours(country?.borders);
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Flex
      alignItems='flex-start'
      flexDir='column'
    >
      <Button
        fontSize='sm'
        fontWeight='light'
        onClick={() => navigate(-1)}
        leftIcon={<ArrowBackIcon />}
      >Back</Button>
      { country &&
        <ScaleFade in={true} initialScale={0.4}>
          <CountryInfo
            colorMode={colorMode}
            country={country!}
            navigate={navigate}
            neighbours={neighbours}
          />
        </ScaleFade>
      }
      <Flex alignSelf='center' mt={10}>
        <ScaleFade in={!isLoading && !country} unmountOnExit={true} initialScale={0.4}>
          <Text fontSize='xl'>Country not found :(</Text>
        </ScaleFade>
      </Flex>
    </Flex>
  );
};
