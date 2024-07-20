import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container } from '../../components';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
