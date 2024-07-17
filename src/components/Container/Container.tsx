import { FC } from 'react';
import { Container as ChakraContainer } from '@chakra-ui/react';
import { ContainerProps } from './Container.props.ts';

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <ChakraContainer>
      {children}
    </ChakraContainer>
  );
};
