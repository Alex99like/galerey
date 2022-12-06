import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IImageItem } from 'types/IImageItem';

type SearchType = { page: string; search: string };
type ResponseFetch = { total: number; total_pages: number; results: IImageItem[] };

export const cardsApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/' }),
  endpoints: (build) => ({
    fetchCards: build.query<ResponseFetch, SearchType>({
      query: ({ page = 1, search = 'new-york' }) => ({
        url: 'search/collections?',
        params: {
          page: page,
          query: search,
        },
        headers: {
          Authorization: 'Client-ID wYinecv5pjEh_oHIJFpAH6SWtWS2xBpmZcfpAF5eYwU',
        },
      }),
    }),
  }),
});

export const { useFetchCardsQuery } = cardsApi;
