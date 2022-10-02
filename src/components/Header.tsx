import { IPropsRoutes } from 'App';
import React, { Component } from 'react';
import '../styles/header.scss';
import Navbar from './Navbar';

class Header extends Component<IPropsRoutes> {
  constructor(props: IPropsRoutes) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <header>
        <h1 className="title">RSS REACT</h1>
        <Navbar routes={this.props.routes} />
      </header>
    );
  }
}

export default Header;
