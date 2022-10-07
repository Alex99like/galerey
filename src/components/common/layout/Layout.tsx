import Footer from 'components/footer/Footer';
import Header, { IPropsRoutes } from 'components/header/Header';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Layout extends Component<IPropsRoutes> {
  render(): React.ReactNode {
    const { routes } = this.props;

    return (
      <>
        <Header routes={routes} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
