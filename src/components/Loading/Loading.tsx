import { FC } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import { Spinner, Text } from '@chakra-ui/react';

export const Loading: FC = () => {
  const isFetching = useIsFetching();
  const display = isFetching ? 'inherit' : 'none';
  return (
    <Spinner
      display={display}
      emptyColor='gray.200'
      speed='0.65s'
    >
      <Text>Loading...</Text>
    </Spinner>
  );
};
