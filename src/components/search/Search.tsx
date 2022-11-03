import { actionSetSort } from 'context/ReduceAction';
import { useSelectorReduce } from 'context/ReducerProvider';
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { FC, useEffect, useRef, useState } from 'react';
import './search.scss';

interface IPropsSearch {
  searchMethod: (str: string) => void;
  prevRequest: string;
}

const Search: FC<IPropsSearch> = ({ searchMethod }) => {
  const input = useRef<HTMLInputElement>(null);
  const { dispatch, sort, search: stateSearch } = useSelectorReduce();
  const [search, setSearch] = useLocalStorage('input-v21', '');
  const [active, setActive] = useState<boolean>(false);

  const inputMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    input.current?.focus();
  });

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

  const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch && dispatch(actionSetSort(e.target.value));
  };

  return (
    <div className={'search-container'}>
      <select
        defaultValue={sort === 'latest' ? 'latest' : 'oldest'}
        onChange={handleSubmit}
        className={'sort-by'}
      >
        <option value={'latest'}>LATEST</option>
        <option value={'oldest'}>OLDEST</option>
      </select>
      <input
        ref={input}
        onKeyDown={submitEnter}
        onKeyUp={submitUpEnter}
        onChange={inputMethod}
        value={search}
        type={'search'}
        placeholder={`${!!stateSearch ? `${stateSearch}...` : 'Enter your Title Photo...'}`}
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
