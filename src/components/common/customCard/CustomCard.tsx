import People from '../../../assets/teamwork.png';
import Friends from '../../../assets/friends.png';
import Favorites from '../../../assets/star.png';
import Alert from '../../../assets/tick.png';
import './customCard.scss';
import { ICard } from 'page/formPage/FormPage';
import React, { FC } from 'react';

export interface IWhoSee {
  allPeople: React.RefObject<HTMLInputElement>;
  fiends: React.RefObject<HTMLInputElement>;
  favorites: React.RefObject<HTMLInputElement>;
}

export interface IApprove {
  alerts: React.RefObject<HTMLInputElement>;
  likes: React.RefObject<HTMLInputElement>;
}

export interface ICustomCardWhoSee {
  favorite: boolean;
  friends: boolean;
  allPeople: boolean;
}

const CustomCard: FC<{ card: ICard }> = ({ card }) => {
  const createImage = (who: string) => {
    if (who === 'all-people') return People;
    if (who === 'favorites') return Favorites;
    if (who === 'friends') return Friends;
  };

  const { title, date, approve, select, image, radio } = card;

  // const Image = URL.createObjectURL(URL.createObjectURL(image.files![0]));

  return (
    <div style={{ boxShadow: `0 7px 20px ${select}` }} className="item-custom-card">
      <h3>{date}</h3>
      <h1>{title}</h1>
      <img className={'who-see'} src={createImage(radio)} />
      <img src={image} />
      <img className={'approve'} src={approve ? Alert : ''} />
    </div>
  );
};

export default CustomCard;
