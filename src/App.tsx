import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import '@fontsource/nunito/400.css';
import { queryClient } from './react-query';
import { theme } from './theme';
import { routes } from './routes.tsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
