import React, { FC } from 'react';
import './header.scss';
import Navbar from '../navbar/Navbar';
import { route } from 'components/utils/route';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from 'store';

export interface IPropsRoutes {
  routes: typeof route;
}

const Header: FC<IPropsRoutes> = ({ routes }) => {
  const { cards, page: statePage } = useAppSelector((state) => state.cards);

  const { idPage, page } = useParams();
  const { pathname } = useLocation();
  const pageCard = cards.find((card) => card.id === idPage);

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
