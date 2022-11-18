import { useRequestReducer } from 'hooks/useRequestReducer';
import React, { FC, Reducer, useContext, useReducer } from 'react';
import { createContext, PropsWithChildren } from 'react';
import { ActionReduce, ActionType, IAppContext } from './Reduce.type';

const initialState: IAppContext = {
  page: null,
  totalPage: null,
  quantity: 10,
  pageCards: [],
  customCard: [],
  dispatch: null,
  sort: 'latest',
  loading: false,
  search: localStorage.getItem('request-v-1') ?? '',
};

const AppReducer: Reducer<IAppContext, ActionReduce> = (state, action): IAppContext => {
  switch (action.type) {
    case ActionType.GET_CARDS: {
      return {
        ...state,
        pageCards: action.payload.pageCards ?? [],
        totalPage: action.payload.totalPage ?? null,
      };
    }
    case ActionType.SET_PAGE: {
      return {
        ...state,
        page: action.payload.page ?? 1,
      };
    }
    case ActionType.SET_SEARCH: {
      return {
        ...state,
        search: action.payload.search ?? '',
      };
    }
    case ActionType.SET_SORT: {
      return {
        ...state,
        sort: action.payload.sort || 'latest',
      };
    }
    case ActionType.SET_CUSTOM_CARD: {
      return {
        ...state,
        customCard: action.payload.customCard ?? [],
      };
    }
    case ActionType.QUANTITY: {
      return {
        ...state,
        quantity: action.payload.quantity ?? 10,
      };
    }
    case ActionType.RESET: {
      return {
        ...state,
        pageCards: [],
      };
    }
    default:
      return state;
  }
};

export const AppContext = createContext<IAppContext>(initialState);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [{ page, pageCards, totalPage, search, sort, customCard, quantity }, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  const [loading] = useRequestReducer(dispatch, search, page, sort, quantity);
  return (
    <AppContext.Provider
      value={{ page, totalPage, pageCards, dispatch, search, sort, loading, customCard, quantity }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useSelectorReduce = () => useContext(AppContext);
