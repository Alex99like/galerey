import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.scss';

const Welcome = () => {
  return (
    <div className={'welcome-container'}>
      <h1 className={'welcome'}>
        Welcome to the RSS React App, you can go to the main page <Link to={'/home/1'}>Home</Link>
      </h1>
    </div>
  );
};

export default Welcome;
