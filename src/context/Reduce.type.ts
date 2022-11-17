import { ICard } from 'page/formPage/FormPage';
import { IImageItem } from 'types/IImageItem';

export interface IAppContext {
  page: number;
  quantity: number;
  totalPage: number | null;
  pageCards: IImageItem[];
  dispatch: React.Dispatch<ActionReduce> | null;
  search: string;
  customCard: ICard[];
  sort: 'latest' | 'oldest' | 'popular';
  loading: boolean;
}

export enum ActionType {
  GET_CARDS,
  SET_PAGE,
  RESET,
  SET_SEARCH,
  SET_SORT,
  SET_CUSTOM_CARD,
  QUANTITY,
}

export type ActionReduce =
  | { type: ActionType.GET_CARDS; payload: Partial<IAppContext> }
  | { type: ActionType.RESET }
  | { type: ActionType.SET_PAGE; payload: Partial<IAppContext> }
  | { type: ActionType.SET_SEARCH; payload: Partial<IAppContext> }
  | { type: ActionType.SET_SORT; payload: Partial<IAppContext> }
  | { type: ActionType.SET_CUSTOM_CARD; payload: Partial<IAppContext> }
  | { type: ActionType.QUANTITY; payload: Partial<IAppContext> };
