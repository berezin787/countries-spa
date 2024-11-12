import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { CountryInfo } from '../../components/CountryInfo/CountryInfo';
import { useCountry } from '../../hooks/useCountry';

export const Details: FC = () => {
  const { country } = useCountry();
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
        <CountryInfo
          colorMode={colorMode}
          country={country}
          navigate={navigate}
        />
      }
    </Flex>
  );
};
