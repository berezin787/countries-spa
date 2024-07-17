import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header.tsx';
import { Container } from '../../components/Container/Container.tsx';

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
