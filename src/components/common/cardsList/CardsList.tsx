import Pagination from 'components/Pagination/Pagination';
import { calcWidth } from 'components/utils/calcWidth';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { IImageItem } from 'types/IImageItem';
import Card from '../card/Card';
import './cardList.scss';

const heightDivider = 23;

interface IPropsCards {
  items: IImageItem[];
  stateModal?: (state: boolean, id: string) => void;
}

const CardsList: FC<IPropsCards> = ({ items, stateModal }) => {
  const [height, setHeight] = useState<number>(1800);

  const resizeObserver = useCallback(() => {
    const heightRes = items.reduce((acc, card) => (acc += card.cover_photo.height), 0);
    setHeight(+((heightRes / heightDivider) * calcWidth(window.innerWidth)).toFixed(0) + 100);
  }, [items]);

  useEffect(() => {
    window.addEventListener('resize', resizeObserver);
    resizeObserver();
    return () => {
      window.removeEventListener('resize', resizeObserver);
    };
  }, [resizeObserver]);

  const callModal = (id: string) => {
    stateModal && stateModal(true, id);
  };

  return (
    <>
      <Pagination />
      <div style={{ height: height }} className={'items-container'}>
        {items.length === 0 && (
          <div className={'no-results'}>
            Sorry, nothing was found on the request, to return, press <span>Enter</span>
          </div>
        )}
        {items.map((el) => (
          <Card callModal={() => callModal(el.id)} key={el.id} item={el} />
        ))}
      </div>
    </>
  );
};

export default CardsList;
