import CustomCard from 'components/common/customCard/CustomCard';
import React from 'react';
import { useAppSelector } from 'store';
import './listCustomCards.scss';

const ListCustomCards = () => {
  const { customCards } = useAppSelector((state) => state.form);

  return (
    <div className={'custom-board-cards'}>
      <fieldset>
        <legend>Board your Card</legend>
        <div>
          {customCards.map((el) => (
            <CustomCard key={el.title} card={el} />
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default ListCustomCards;
