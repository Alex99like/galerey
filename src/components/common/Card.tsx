import React, { Component } from 'react';
import { randomColor } from 'components/utils/randomColor';
import { IImageItem } from 'types/IImageItem';
import ImageUser from '../../assets/photoghraf.jpg';
import ImageLike from '../../assets/like-svgrepo-com.svg';

interface ICardProps {
  item: IImageItem;
}

class Card extends Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    const el = this.props.item;

    return (
      <div className={'item-card'} data-testid={el.id}>
        <div className={'user'}>
          <img
            src={
              el.user.profile_image.large.includes('placeholder-avatars')
                ? ImageUser
                : el.user.profile_image.large
            }
          />
          <h5>{el.user.name}</h5>
        </div>
        <h4 className={'date'}>{el.published_at.split('T')[0]}</h4>
        <img src={el.cover_photo.urls.small} />
        <div className="description">
          <div className={'likes'}>
            <span>{el.cover_photo.likes}</span> <img src={ImageLike} />
          </div>
          <fieldset>
            <legend>{el.title}</legend>
            <p>
              {el.cover_photo.alt_description ||
                el.cover_photo.description ||
                el.description ||
                'No Description'}
            </p>
          </fieldset>
          <div className={'tags'}>
            {el.tags.map((tag) => (
              <span style={{ background: randomColor() }} key={tag.title}>{`#${tag.title}`}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
