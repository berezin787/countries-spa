import { QueryCache, QueryClient } from '@tanstack/react-query';
import { toast } from '../components';

const errorHandler = (errorMessage: string) => {
  const id = 'react-query-toast';
  const message = `Could not fetch data: ${errorMessage || 'error connecting to server'}`;

  if (!toast.isActive(id)) {
    toast({
      id,
      isClosable: true,
      title: message,
      position: 'top-right',
      status: 'error',
      variant: 'subtle',
    });
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 900_000,
      staleTime: 600_000,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => errorHandler(error?.message),
  }),
});
