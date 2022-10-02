import { IPropsRoutes } from 'App';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Layout extends Component<IPropsRoutes> {
  constructor(props: IPropsRoutes) {
    super(props);
  }

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
