import { FC } from 'react';
import { Container as ChakraContainer } from '@chakra-ui/react';
import { IContainerProps } from './Container.props.interface';

export const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <ChakraContainer>
      {children}
    </ChakraContainer>
  );
};
