import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { setQuantity, setSort } from 'store/reducer/cardSlice';
import './search.scss';

interface IPropsSearch {
  searchMethod: (str: string) => void;
  prevRequest: string;
}

const Search: FC<IPropsSearch> = ({ searchMethod }) => {
  const input = useRef<HTMLInputElement>(null);
  const { sort, searchQuery, cards, quantity } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useLocalStorage('input-v21', '');
  const [active, setActive] = useState<boolean>(false);

  const inputMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    input.current?.focus();
  }, [cards]);

  const submitMethod = () => {
    searchMethod(search);
    setSearch('');
    input.current?.focus();
  };

  const submitEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchMethod(search);
      setSearch('');
      setActive(true);
    }
  };

  const submitUpEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setActive(false);
    }
  };

  const handleQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setQuantity(+e.target.value));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <div className={'search-container'}>
      <select
        defaultValue={sort == 'latest' ? 'latest' : sort === 'popular' ? 'popular' : 'oldest'}
        onChange={handleSubmit}
        className={'sort-by'}
      >
        <option value={'latest'}>LATEST</option>
        <option value={'oldest'}>OLDEST</option>
        <option value={'popular'}>POPULAR</option>
      </select>
      <select
        defaultValue={quantity == 5 ? '5' : quantity == 7 ? '7' : '10'}
        onChange={handleQuantity}
        className={'quantity'}
      >
        <option value={'5'}>5</option>
        <option value={'7'}>7</option>
        <option value={'10'}>10</option>
      </select>
      <input
        ref={input}
        onKeyDown={submitEnter}
        onKeyUp={submitUpEnter}
        onChange={inputMethod}
        value={search}
        type={'search'}
        placeholder={`${!!searchQuery ? `${searchQuery}...` : 'Enter your Title Photo...'}`}
      />
      <button
        className={active ? 'active' : ''}
        onClick={submitMethod}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        type={'button'}
      >
        SEARCH
      </button>
    </div>
  );
};

export default Search;
