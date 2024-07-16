import { FC } from 'react';
import classNames from 'classnames';
import { Container as ChakraContainer } from '@chakra-ui/react';
import styles from './Container.module.css';
import { ContainerProps } from './Container.props.ts';

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <ChakraContainer className={classNames(styles.container)}>
      {children}
    </ChakraContainer>
  );
};
