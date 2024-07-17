import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { containerTheme } from './components/Container';

export const theme = extendTheme(
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
      heading: 'Roboto, sans-serif',
      body: 'Roboto, sans-serif',
    },
    styles: {},
    components: {
      Container: containerTheme,
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' }),
);
