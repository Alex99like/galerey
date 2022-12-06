import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortOrder } from 'components/utils/sortOrder';
import { IImageItem } from 'types/IImageItem';

interface CardsState {
  cards: IImageItem[];
  quantity: number;
  isLoading: boolean;
  searchQuery: string;
  sort: string;
  page: number | null;
  totalPage: number | null;
}

type SearchType = { page: string; search: string; quantity: string };
type ResponseFetch = { total: number; total_pages: number; results: IImageItem[] };

const initialState: CardsState = {
  cards: [],
  quantity: 10,
  isLoading: false,
  searchQuery: localStorage.getItem('request-v-1') || '',
  sort: 'latest',
  page: null,
  totalPage: null,
};

export const fetchCards = createAsyncThunk<ResponseFetch, SearchType, { rejectValue: string }>(
  'todos/fetchTodos',
  async function ({ page, search, quantity }, { rejectWithValue }) {
    const response = await fetch(
      `https://api.unsplash.com/search/collections?page=${page}?&query=${search}&per_page=${quantity}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Client-ID wYinecv5pjEh_oHIJFpAH6SWtWS2xBpmZcfpAF5eYwU',
        },
      }
    );

    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }

    const data = (await response.json()) as ResponseFetch;

    return data;
  }
);

export const cardsSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardsFething(state, action: PayloadAction<IImageItem[]>) {
      state.cards = sortOrder(action.payload, state.sort);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      localStorage.setItem('request-v-1', action.payload);
      state.searchQuery = action.payload;
    },
    setQuantity(state, action: PayloadAction<number>) {
      state.quantity = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchCards.fulfilled.type]: (state, action: PayloadAction<ResponseFetch>) => {
      state.cards = sortOrder(action.payload.results, state.sort);
      state.totalPage = action.payload.total_pages;
      state.isLoading = false;
    },
    [fetchCards.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { cardsFething, setSearchQuery, setPage, setSort, setQuantity } = cardsSlice.actions;
