import { IPropsRoutes } from 'components/header/Header';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component<IPropsRoutes> {
  render(): React.ReactNode {
    const { routes } = this.props;

    return (
      <nav>
        {routes.slice(1).map((route) => (
          <NavLink
            key={route.name}
            to={route.path}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    );
  }
}

export default Navbar;
