import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './react-query';
import { theme } from './theme';
import { routes } from './routes.tsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
