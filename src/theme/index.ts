import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

export const theme = extendTheme(
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
      heading: 'Roboto, sans-serif',
      body: 'Roboto, sans-serif',
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
);
