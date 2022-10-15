import React, { Component } from 'react';
import { IImageItem } from 'types/IImageItem';
import Card from '../card/Card';
import './cardList.scss';

interface IPropsCards {
  items: IImageItem[];
  stateModal: (state: boolean, id: string) => void;
  isModal: boolean;
}

interface IStateCardsList {
  height: number;
}

class CardsList extends Component<IPropsCards, IStateCardsList> {
  resize: () => void;

  constructor(props: IPropsCards) {
    super(props);
    this.state = {
      height: 1800,
    };
    this.resize = this.resizeObserver.bind(this);
  }

  calcWidth(width: number | undefined) {
    if (width) {
      if (width > 1440) return 1;
      if (width > 1285 && width < 1440) return 1;
      if (width > 980 && width < 1285) return 1.25;
      if (width > 600 && width < 980) return 1.8;
      if (width < 600) return 3;
    }
    return 3;
  }

  resizeObserver() {
    const heightRes = this.props.items.reduce((acc, card) => (acc += card.cover_photo.height), 0);
    this.setState({
      height: +((heightRes / 23) * this.calcWidth(window.innerWidth)).toFixed(0),
    });
  }

  async componentDidMount(): Promise<void> {
    this.resizeObserver();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.resize);
  }

  callModal(id: string) {
    this.props.stateModal(true, id);
  }

  render() {
    const { items } = this.props;
    return (
      <div style={{ height: this.state.height }} className="items-container">
        {items.length === 0 && (
          <div className={'no-results'}>
            Sorry, nothing was found on the request, to return, press <span>Enter</span>
          </div>
        )}
        {this.props.items.map((el) => (
          <Card callModal={this.callModal.bind(this, el.id)} key={el.id} item={el} />
        ))}
      </div>
    );
  }
}

export default CardsList;
