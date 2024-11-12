import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Loading } from './components';
import { queryClient } from './react-query';
import { theme } from './theme';
import { routes } from './routes';
import '@fontsource/nunito/400.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Loading />
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
