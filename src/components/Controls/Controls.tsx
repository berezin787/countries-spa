import { FC } from 'react';
import classNames from 'classnames';
import { Box } from '@chakra-ui/react';
import styles from './Controls.module.css';
import { Search } from '../';

export const Controls: FC = () => {
  return (
    <Box
      className={classNames(styles.controls)}
      flexDir={{ md: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent={{ md: 'space-between' }}
    >
      <Search />
      {/*<Select />*/}
    </Box>
  );
};
