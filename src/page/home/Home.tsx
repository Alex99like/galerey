import React, { useEffect } from 'react';
import { IImageItem } from '../../types/IImageItem';
import './home.scss';
import Loader from 'components/common/loader/Loader';
import Search from 'components/search/Search';
import CardsList from 'components/common/cardsList/CardsList';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchCards, setSearchQuery } from 'store/reducer/cardSlice';
export interface IStateHome {
  inputSearch: '';
  items: IImageItem[];
  loader: boolean;
  isModal: {
    active: boolean;
    id?: string;
  };
}
const Home = () => {
  const { cards, isLoading, searchQuery, sort, quantity } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { page } = useParams();

  useEffect(() => {
    !!page &&
      dispatch(
        fetchCards({
          page: page,
          search: searchQuery || 'new york',
          quantity: `${quantity}`,
        })
      );
    return () => {
      localStorage.setItem('request-v-1', searchQuery);
    };
  }, [dispatch, page, searchQuery, sort, quantity]);

  const searchMethod = (str: string) => {
    if (searchQuery !== str) {
      navigate('/home/1');
      dispatch(setSearchQuery(str));
    }
  };

  return (
    <>
      <Search searchMethod={searchMethod} prevRequest={'search'} />
      {isLoading ? <Loader /> : <CardsList items={cards} />}
    </>
  );
};

export default Home;
