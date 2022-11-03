import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.scss';

const ErrorPage = () => {
  return (
    <div className={'error-container'}>
      <h1 className={'error-title'}>404</h1>
      <h2 className={'error-description'}>
        There is no such page do you want to go to the main page ? <Link to={'/home/1'}>Home</Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
