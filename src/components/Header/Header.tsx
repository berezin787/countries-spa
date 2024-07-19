import { FC } from 'react';
import classNames from 'classnames';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from './Header.module.css';
import { Container } from '../Container/Container.tsx';
import { Link } from '../Link/Link.tsx';

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
