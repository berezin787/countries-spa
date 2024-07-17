import { FC } from 'react';
import classNames from 'classnames';
import styles from './Header.module.css';
import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { Container } from '../Container/Container.tsx';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box boxShadow='xl'>
      <Container>
        <Flex className={classNames(styles.header)}>
          <Box>Where is the world?</Box>
          <Box onClick={toggleColorMode}>
            2
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
