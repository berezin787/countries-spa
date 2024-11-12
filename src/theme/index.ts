import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { Container, Link, Spinner } from './components';

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
    shadows:  {
      light: 'rgba(0, 0, 0, 0.16) 0 8px 24px',
      dark: 'rgba(255, 255, 255, 0.16)  0 0 8px',
    },
    components: {
      Container,
      Link,
      Spinner,
    },
  },
  withDefaultColorScheme({ colorScheme: 'gray' }),
);
