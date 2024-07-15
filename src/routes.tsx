import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <>MainLayout</>,
    children: [
      {
        path: '/',
        element: <>HomePage</>,
      },
      {
        path: '/country/:name',
        element: <>Details</>,
      },
      {
        path: '*',
        element: <>NotFound</>,
      },
    ],
  },
]);
