import CustomCard from 'components/common/customCard/CustomCard';
import { useSelectorReduce } from 'context/ReducerProvider';
import React from 'react';
import './listCustomCards.scss';

const ListCustomCards = () => {
  const { customCard } = useSelectorReduce();

  return (
    <div className={'custom-board-cards'}>
      <fieldset>
        <legend>Board your Card</legend>
        <div>
          {customCard.map((el) => (
            <CustomCard key={el.title} card={el} />
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default ListCustomCards;
