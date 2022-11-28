import { IPropsRoutes } from 'components/header/Header';
import { useSelectorReduce } from 'context/ReducerProvider';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar: FC<IPropsRoutes> = () => {
  const { page } = useSelectorReduce();

  return (
    <nav>
      <NavLink to={'form'}>Form</NavLink>
      <NavLink to={'about'}>About</NavLink>
      <NavLink to={`/home/${page === null ? 1 : page}` || `/home/1`}>Home</NavLink>
    </nav>
  );
};

export default Navbar;
