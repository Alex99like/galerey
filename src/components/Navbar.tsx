import { IPropsRoutes } from 'App';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

class Navbar extends Component<IPropsRoutes> {
  constructor(props: IPropsRoutes) {
    super(props);
  }

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
