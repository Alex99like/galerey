import Footer from 'components/footer/Footer';
import Header, { IPropsRoutes } from 'components/header/Header';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC<IPropsRoutes> = ({ routes }) => {
  return (
    <>
      <Header routes={routes} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
