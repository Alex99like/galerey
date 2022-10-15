import React, { Component } from 'react';
import { IImageItem } from 'types/IImageItem';
import Instagram from '../../../assets/instagram.png';
import Twitter from '../../../assets/twitter.png';
import Portfolio from '../../../assets/portfolio.png';
import Planet from '../../../assets/planet-earth.png';
import './modal.scss';
import { randomColor } from 'components/utils/randomColor';
import Photos from '../../../assets/photoDesc.png';
import Collections from '../../../assets/collection.png';
import Likes from '../../../assets/myLikes.png';

interface IPropsModal {
  closeModal: (state: boolean, id?: string) => void;
  card: IImageItem;
}

interface IStateModal {
  activeBack: boolean;
  activeModal: boolean;
}

class Modal extends Component<IPropsModal, IStateModal> {
  constructor(props: IPropsModal) {
    super(props);
    this.state = {
      activeBack: false,
      activeModal: false,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ activeBack: true, activeModal: true });
    });
  }

  render(): React.ReactNode {
    const { cover_photo, preview_photos, user, tags } = this.props.card;
    return (
      <div
        className={`background-modal ${this.state.activeBack ? 'active' : ''}`}
        onClick={() => this.props.closeModal(false)}
      >
        <div
          className={`modal ${this.state.activeBack ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={'close'} onClick={() => this.props.closeModal(false)}>
            <span></span>
            <span></span>
          </div>
          <div className={'profile'}>
            <div className={'avatar'}>
              <img src={cover_photo.user.profile_image.large} />
              <h2>{user.name}</h2>
            </div>
            <div className={'social'}>
              <div className={'instagram'}>
                <a
                  target={'_blank'}
                  href={`https://www.instagram.com/${cover_photo.user.instagram_username}/`}
                  rel="noreferrer"
                >
                  <img src={Instagram} />{' '}
                  {cover_photo.user.instagram_username
                    ? cover_photo.user.instagram_username.slice(0, 12)
                    : 'No Account'}
                </a>
              </div>
              <div className={'twitter'}>
                <a
                  target={'_blank'}
                  href={`http://twitter.com/#!/${user.social.twitter_username}/`}
                  rel="noreferrer"
                >
                  <img src={Twitter} />{' '}
                  {user.social.twitter_username
                    ? user.social.twitter_username.slice(0, 12)
                    : 'No Account'}
                </a>
              </div>
              <div className={'portfolio'}>
                <a target={'_blank'} href={cover_photo.user.social.portfolio_url} rel="noreferrer">
                  <img src={Portfolio} /> {'Portfolio'}
                </a>
              </div>
              <fieldset className={'tags'}>
                <legend>TAGS</legend>
                {tags.map((tag) => (
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
                <h4>{user.location || cover_photo.user.location || 'HIDDEN'}</h4>
              </div>
              <div className={'total-photos'}>
                All Photos <img src={Photos} /> :{' '}
                <span>{user.total_photos || cover_photo.user.total_photos}</span>
              </div>
              <div className={'total-collection'}>
                All Collections <img src={Collections} />:{' '}
                <span>{user.total_collections || cover_photo.user.total_collections}</span>
              </div>
              <div className={'total-likes'}>
                All Likes <img src={Likes} />:
                <span>{` ${user.total_likes || cover_photo.user.total_likes}`}</span>
              </div>
              <fieldset className={'description'}>
                <legend>Description</legend>
                <p>{`${(user.bio || cover_photo.user.bio || 'No Description').slice(0, 60)}...`}</p>
              </fieldset>
            </fieldset>
          </div>
          <fieldset className={'container-photo'}>
            <legend>Preview Photos</legend>
            {preview_photos.map((photo) => (
              <div className={'photo'} key={photo.created_at}>
                <span>{photo.created_at.split('T')[0]}</span>
                <img style={{ height: 100 }} src={photo.urls.thumb} />
              </div>
            ))}
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Modal;
