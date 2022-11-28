import React, { FC } from 'react';
import './header.scss';
import Navbar from '../navbar/Navbar';
import { route } from 'components/utils/route';
import { useSelectorReduce } from 'context/ReducerProvider';
import { useLocation, useParams } from 'react-router-dom';

export interface IPropsRoutes {
  routes: typeof route;
}

const Header: FC<IPropsRoutes> = ({ routes }) => {
  const { pageCards, page: statePage } = useSelectorReduce();

  const { idPage, page } = useParams();
  const { pathname } = useLocation();
  const pageCard = pageCards.find((card) => card.id === idPage);

  return (
    <header>
      <h1 className="title">RSS REACT</h1>
      {pageCard && <h3 className={'card-name'}>{pageCard.user.name}</h3>}
      {page && <h3 className={'card-name'}>PAGE: {statePage}</h3>}
      {pathname.includes('form') && <h3 className={'card-name'}>Form</h3>}
      {pathname.includes('about') && <h3 className={'card-name'}>About</h3>}
      <Navbar routes={routes} />
    </header>
  );
};

export default Header;
