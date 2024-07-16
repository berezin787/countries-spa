import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import styles from './MainLayout.module.css';
import { Header } from '../../components/Header/Header.tsx';
import { Container } from '../../components/Container/Container.tsx';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <div className={classNames(styles.wrapper)}>
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};
