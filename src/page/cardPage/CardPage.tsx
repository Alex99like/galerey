import { useSelectorReduce } from 'context/ReducerProvider';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './cardPage.scss';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';
import Portfolio from '../../assets/portfolio.png';
import Planet from '../../assets/planet-earth.png';
import { randomColor } from 'components/utils/randomColor';
import Photos from '../../assets/photoDesc.png';
import Collections from '../../assets/collection.png';
import Likes from '../../assets/myLikes.png';

const CardPage = () => {
  const { pageCards } = useSelectorReduce();

  const { idPage } = useParams();
  const navigate = useNavigate();
  const card = pageCards.find((el) => el.id === idPage);

  useEffect(() => {
    if (!card) navigate('/home/1');
  }, []);

  const handleBack = () => navigate(-1);

  return (
    <>
      {card && (
        <div className={`page`}>
          <button className={'go-back'} onClick={handleBack}>
            GO BACK
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <div className={'close'}>
              <span></span>
              <span></span>
            </div>
            <div className={'profile'}>
              <div className={'avatar'}>
                <img src={card.cover_photo.user.profile_image.large} />
                <h2>{card.user.name}</h2>
              </div>
              <div className={'social'}>
                <div className={'instagram'}>
                  <a
                    target={'_blank'}
                    href={`https://www.instagram.com/${card.cover_photo.user.instagram_username}/`}
                    rel="noreferrer"
                  >
                    <img src={Instagram} />
                    {card.cover_photo.user.instagram_username
                      ? card.cover_photo.user.instagram_username.slice(0, 12)
                      : 'No Account'}
                  </a>
                </div>
                {card.user.social.twitter_username && (
                  <div className={'twitter'}>
                    <a
                      target={'_blank'}
                      href={`http://twitter.com/#!/${card.user.social.twitter_username}/`}
                      rel="noreferrer"
                    >
                      <img src={Twitter} />
                      {card.user.social.twitter_username
                        ? card.user.social.twitter_username.slice(0, 12)
                        : 'No Account'}
                    </a>
                  </div>
                )}
                <div className={'portfolio'}>
                  <a
                    target={'_blank'}
                    href={card.cover_photo.user.social.portfolio_url}
                    rel="noreferrer"
                  >
                    <img src={Portfolio} /> {'Portfolio'}
                  </a>
                </div>
                <fieldset className={'tags'}>
                  <legend>TAGS</legend>
                  {card.tags.map((tag) => (
                    <span
                      style={{ background: randomColor() }}
                      key={tag.title}
                    >{`#${tag.title}`}</span>
                  ))}
                </fieldset>
              </div>
              <fieldset className={'data-description'}>
                <legend>Data User</legend>
                <div className={'location'}>
                  <span>
                    Location <img src={Planet} />
                  </span>
                  <h4>{card.user.location || card.cover_photo.user.location || 'HIDDEN'}</h4>
                </div>
                <div className={'total-photos'}>
                  All Photos <img src={Photos} /> :{' '}
                  <span>{card.user.total_photos || card.cover_photo.user.total_photos}</span>
                </div>
                <div className={'total-collection'}>
                  All Collections <img src={Collections} />:{' '}
                  <span>
                    {card.user.total_collections || card.cover_photo.user.total_collections}
                  </span>
                </div>
                <div className={'total-likes'}>
                  All Likes <img src={Likes} />:
                  <span>{` ${card.user.total_likes || card.cover_photo.user.total_likes}`}</span>
                </div>
                <fieldset className={'description'}>
                  <legend>Description</legend>
                  <p>{`${card.user.bio || card.cover_photo.user.bio || 'No Description'}...`}</p>
                </fieldset>
              </fieldset>
            </div>
            <fieldset className={'container-photo'}>
              <legend>Preview Photos</legend>
              {card.preview_photos.map((photo) => (
                <div className={'photo'} key={photo.created_at}>
                  <span>{photo.created_at.split('T')[0]}</span>
                  <img style={{ height: 150 }} src={photo.urls.thumb} />
                </div>
              ))}
            </fieldset>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPage;
