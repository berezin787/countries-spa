import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/Main/MainLayout.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
