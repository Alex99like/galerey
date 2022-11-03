import React, { FC, useState } from 'react';
import { randomColor } from 'components/utils/randomColor';
import { IImageItem } from 'types/IImageItem';
import './card.scss';
import ImageUser from '../../../assets/photoghraf.jpg';
import ImageLike from '../../../assets/like-svgrepo-com.svg';
import { Link } from 'react-router-dom';

interface ICardProps {
  item: IImageItem;
  callModal: () => void;
}

const Card: FC<ICardProps> = ({ callModal, item }) => {
  const { id, cover_photo, description, published_at, tags, title, user } = item;

  const [error, setError] = useState(false);

  return (
    <Link to={`/home/card/${id}`} className={'item-card'} onClick={callModal} data-testid={id}>
      <div className={'user'}>
        <img
          onError={() => setError(true)}
          src={
            user.profile_image.large.includes('placeholder-avatars')
              ? ImageUser
              : error
              ? ImageUser
              : user.profile_image.large
          }
        />
        <h5>{user.name}</h5>
      </div>
      <h4 className={'date'}>{published_at.split('T')[0]}</h4>
      <img src={cover_photo.urls.small || user.profile_image.medium} />
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
    </Link>
  );
};

export default Card;
