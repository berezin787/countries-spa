import { FC } from 'react';
import classNames from 'classnames';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Container } from '../Container/Container';
import { Link } from '../Link/Link';
import styles from './Header.module.css';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box boxShadow='xl'>
      <Container>
        <Flex className={classNames(styles.header)}>
          <Box>
            <Link to='/pew'>Where is the world?</Link>
          </Box>
          <Box onClick={toggleColorMode}>
            <IconButton
              aria-label={'Color Mode Switcher'}
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
