import React, { Component } from 'react';
import { randomColor } from 'components/utils/randomColor';
import { IImageItem } from 'types/IImageItem';
import './card.scss';
import ImageUser from '../../../assets/photoghraf.jpg';
import ImageLike from '../../../assets/like-svgrepo-com.svg';

interface ICardProps {
  item: IImageItem;
  callModal: () => void;
}

class Card extends Component<ICardProps> {
  render() {
    const { id, cover_photo, description, published_at, tags, title, user } = this.props.item;

    return (
      <div className={'item-card'} onClick={this.props.callModal} data-testid={id}>
        <div className={'user'}>
          <img
            src={
              user.profile_image.large.includes('placeholder-avatars')
                ? ImageUser
                : user.profile_image.large
            }
          />
          <h5>{user.name}</h5>
        </div>
        <h4 className={'date'}>{published_at.split('T')[0]}</h4>
        <img src={cover_photo.urls.small} />
        <div className="description">
          <div className={'likes'}>
            <span>{cover_photo.likes}</span> <img src={ImageLike} />
          </div>
          <fieldset>
            <legend>{title}</legend>
            <p>
              {cover_photo.alt_description ||
                cover_photo.description ||
                description ||
                'No Description'}
            </p>
          </fieldset>
          <div className={'tags'}>
            {tags.map((tag) => (
              <span style={{ background: randomColor() }} key={tag.title}>{`#${tag.title}`}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
