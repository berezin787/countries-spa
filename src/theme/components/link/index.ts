import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
  baseStyle: {
    cursor: 'pointer',
    _hover: {
      textDecoration: 'none',
    },
  },
});
