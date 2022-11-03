import { calcPages } from 'components/utils/calcPages';
import { actionReset, actionSetPage } from 'context/ReduceAction';
import { useSelectorReduce } from 'context/ReducerProvider';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import './pagination.scss';

const Pagination = () => {
  const { totalPage, dispatch, page: countPage } = useSelectorReduce();

  const { page } = useParams();
  const navigate = useNavigate();

  const [count, setCount] = useState<number[]>([]);

  useEffect(() => {
    if (dispatch && page) dispatch(actionSetPage(+page));
    const [first, last] = calcPages(totalPage ?? 5, countPage ?? 1);

    const pages = Array(totalPage)
      .fill(0)
      .map((_, i) => i + 1)
      .slice(first, last);
    setCount(pages);
  }, [countPage, dispatch, page, totalPage]);

  const handleNext = () => navigate('/home/1');
  const handlePrev = () => navigate(`/home/${totalPage && totalPage}`);

  const handleLink = () => {
    if (page && +page !== countPage) {
      dispatch && dispatch(actionReset());
    }
  };

  return (
    <div className={'container-pagination'}>
      {totalPage ? (
        <>
          <button onClick={handleNext} className={'arrow'}>
            {'<<'}
          </button>
          {count.map((el) => (
            <NavLink onClick={handleLink} key={el} to={`/home/${el}`}>
              {el}
            </NavLink>
          ))}
          <button onClick={handlePrev} className={'arrow'}>
            {'>>'}
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
