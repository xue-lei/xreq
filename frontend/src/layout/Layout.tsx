import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../page/Header';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
