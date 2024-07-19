import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  baseStyle: {
    'padding': '0 2rem',
    'margin': { base: '0 auto 1rem', md: '0 auto 4rem' },
    maxW: '100%',
    w: '7xl',
  },
});
