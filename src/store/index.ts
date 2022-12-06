import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cardsApi } from './services/CardService';
import { cardsSlice } from './reducer/cardSlice';
import { formSlice } from './reducer/formSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice.reducer,
    form: formSlice.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
