import { IImageItem } from 'types/IImageItem';
import { ActionType } from './Reduce.type';

export const actionGetCards = ({
  pageCards,
  totalPage,
  page,
}: {
  pageCards: IImageItem[];
  totalPage: number;
  page: number;
}) => ({ type: ActionType.GET_CARDS, payload: { totalPage, pageCards, page } });

export const actionSetPage = (page: number) => ({
  type: ActionType.SET_PAGE,
  payload: { page: page },
});

type ISort = 'latest' | 'oldest';

export const actionSetSort = (sort: string) => ({
  type: ActionType.SET_SORT,
  payload: { sort: sort as ISort },
});

export const actionSetSearch = (search: string) => ({
  type: ActionType.SET_SEARCH,
  payload: { search: search },
});

export const actionReset = () => ({ type: ActionType.RESET, payload: {} });
