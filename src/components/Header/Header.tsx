import { FC } from 'react';
import classNames from 'classnames';
import styles from './Header.module.css';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Container } from '../Container/Container.tsx';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box boxShadow='xl'>
      <Container>
        <Flex className={classNames(styles.header)}>
          <Box>Where is the world?</Box>
          <Box onClick={toggleColorMode}>
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              fontSize='sm'
            />
            <span
              className={classNames(styles['color-mode-title'])}
            >{colorMode} mode</span>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
