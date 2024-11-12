import { defineStyleConfig } from '@chakra-ui/react';

export const Spinner = defineStyleConfig({
  baseStyle: {
    borderWidth: 4,
    color: 'blue.500',
    position: 'fixed',
    zIndex: '9999',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  defaultProps: {
    size: 'xl',
    speed: '0.65s',
  },
});
