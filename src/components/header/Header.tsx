import React, { Component } from 'react';
import './header.scss';
import Navbar from '../navbar/Navbar';
import { route } from 'components/utils/route';

export interface IPropsRoutes {
  routes: typeof route;
}

class Header extends Component<IPropsRoutes> {
  render(): React.ReactNode {
    const { routes } = this.props;
    return (
      <header>
        <h1 className="title">RSS REACT</h1>
        <Navbar routes={routes} />
      </header>
    );
  }
}

export default Header;
