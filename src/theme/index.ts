import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { containerTheme } from './components/Container';

export const theme = extendTheme(
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
      heading: '\'Nunito\', sans-serif',
      body: '\'Nunito\', sans-serif',
    },
    styles: {
      global: {
        body: {
        },
      },
    },
    components: {
      Container: containerTheme,
    },
  },
  withDefaultColorScheme({ colorScheme: 'gray' }),
);
