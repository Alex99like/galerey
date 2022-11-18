import { sortOrder } from 'components/utils/sortOrder';
import FetchApi from 'api/FetchApi';
import { ActionReduce } from 'context/Reduce.type';
import { actionGetCards } from 'context/ReduceAction';
import React, { useCallback, useEffect, useState } from 'react';

export const useRequestReducer = (
  dispatch: React.Dispatch<ActionReduce>,
  search = 'new-york',
  page: number | null,
  sort = 'latest',
  quantity = 10
) => {
  const [loading, setLoading] = useState(false);
  const fetchCard = useCallback(async () => {
    if (!page) return;
    setLoading(true);
    const response = await FetchApi.getCards(page, search || 'new-york', quantity);
    const res = sortOrder(response.results, sort);
    setLoading(false);
    page &&
      dispatch(actionGetCards({ pageCards: res, totalPage: response.total_pages, page: page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, search, sort, quantity]);

  useEffect(() => {
    fetchCard();
  }, [fetchCard, page]);

  return [loading];
};
