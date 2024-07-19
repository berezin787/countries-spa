import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { Container, Link } from './components';

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
      Container,
      Link,
    },
  },
  withDefaultColorScheme({ colorScheme: 'gray' }),
);
