import { createHashRouter } from 'react-router-dom';
import { MainLayout } from './layouts/Main/MainLayout';
import { Details, Home, NotFound } from './pages';

export const routes = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home/>  ,
      },
      {
        path: '/country/:name',
        element: <Details />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
