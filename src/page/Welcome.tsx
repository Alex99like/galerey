import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcome.scss';

class Welcome extends React.Component {
  render() {
    return (
      <div className={'welcome-container'}>
        <h1 className={'welcome'}>
          Welcome to the RSS React App, you can go to the main page <Link to={'home'}>Home</Link>
        </h1>
      </div>
    );
  }
}

export default Welcome;
