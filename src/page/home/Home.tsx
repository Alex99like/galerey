import React, { useEffect } from 'react';
import { IImageItem } from '../../types/IImageItem';
import './home.scss';
import Loader from 'components/common/loader/Loader';
import Search from 'components/search/Search';
import CardsList from 'components/common/cardsList/CardsList';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelectorReduce } from 'context/ReducerProvider';
import { actionReset, actionSetPage, actionSetSearch } from 'context/ReduceAction';
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
  const { search, pageCards, dispatch, loading } = useSelectorReduce();
  const navigate = useNavigate();

  const { page } = useParams();

  useEffect(() => {
    if (dispatch && page) dispatch(actionSetPage(+page));
    return () => {
      localStorage.setItem('request-v-1', search);
    };
  }, [dispatch, page, search]);

  const searchMethod = (str: string) => {
    if (dispatch && search !== str) {
      navigate('/home/1');
      dispatch(actionReset());
      dispatch(actionSetSearch(str));
    }
  };

  return (
    <>
      <Search searchMethod={searchMethod} prevRequest={search} />
      {loading ? <Loader /> : <CardsList items={pageCards} />}
    </>
  );
};

export default Home;
