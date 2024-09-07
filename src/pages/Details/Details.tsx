import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { ICountryData } from '../../interfaces/country-data.interface';
import { CountryInfo } from '../../components/CountryInfo/CountryInfo';

export const Details: FC = () => {
  // const { name } = useParams();
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const [country] = useState<ICountryData>(null);

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
