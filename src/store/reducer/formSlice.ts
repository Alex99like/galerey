import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from 'page/formPage/FormPage';

interface FormState {
  customCards: ICard[];
}

const initialState: FormState = {
  customCards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<ICard>) {
      state.customCards.push(action.payload);
    },
  },
});

export const { createCard } = formSlice.actions;
