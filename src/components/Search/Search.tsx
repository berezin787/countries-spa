import { FC } from 'react';
import classNames from 'classnames';
import { Box, useColorMode } from '@chakra-ui/react';
import styles from './Search.module.css';

export const Search: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      className={classNames(styles.search)}
      boxShadow={colorMode}
      marginBottom={{ md: '0' }}
      w={{ md: 'xs' }}
    >
      <>Search</>
    </Box>
  );
};
