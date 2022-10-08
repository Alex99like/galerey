import People from '../../../assets/teamwork.png';
import Friends from '../../../assets/friends.png';
import Favorites from '../../../assets/star.png';
import Alert from '../../../assets/tick.png';
import './customCard.scss';
import { ICustomCard } from 'page/formPage/FormPage';
import React, { Component } from 'react';

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

class CustomCard extends Component<{ item: ICustomCard }> {
  createImage(who: ICustomCardWhoSee) {
    if (who.allPeople) return People;
    if (who.favorite) return Favorites;
    if (who.friends) return Friends;
  }

  render(): React.ReactNode {
    const { title, date, approve, color, profile, whoSee } = this.props.item;
    return (
      <div style={{ boxShadow: `0 7px 20px ${color}` }} className="item-custom-card">
        <h3>{date}</h3>
        <h1>{title}</h1>
        <img className={'who-see'} src={this.createImage(whoSee)} />
        <img src={profile} />
        <img className={'approve'} src={approve ? Alert : ''} />
      </div>
    );
  }
}

export default CustomCard;
