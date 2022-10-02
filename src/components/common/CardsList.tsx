import React, { Component } from 'react';
import { IImageItem } from 'types/IImageItem';
import Card from './Card';

interface IPropsCards {
  items: IImageItem[];
}

class CardsList extends Component<IPropsCards> {
  render() {
    return (
      <div className="items-container">
        {this.props.items.length === 0 && (
          <div className={'no-results'}>
            Sorry, nothing was found on the request, to return, press <span>Enter</span>
          </div>
        )}
        {this.props.items.map((el) => (
          <Card key={el.id} item={el} />
        ))}
      </div>
    );
  }
}

export default CardsList;
