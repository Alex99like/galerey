import FetchApi from 'api/FetchApi';
import { useCallback, useEffect, useState } from 'react';
import { IImageItem } from 'types/IImageItem';

const useRequest = (search = ''): [data: IImageItem[], loading: boolean] => {
  const [data, setData] = useState<IImageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCard = useCallback(async (str = '') => {
    setLoading(true);
    const response = await (
      await FetchApi.getCards(1, str.trim().toLowerCase() || 'new-york')
    ).results;
    setLoading(false);
    setData(response);
  }, []);

  useEffect(() => {
    fetchCard(search);
  }, [fetchCard, search]);

  return [data, loading];
};

export default useRequest;
