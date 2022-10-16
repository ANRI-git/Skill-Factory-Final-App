import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageSaved: '',
  favorites: [],
};

export const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    onAddNewFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    onDeleteFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((event) => event.id !== payload);
      state.isSaving = false;
    },
    onSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    onLoadFavorites: (state, { payload }) => {
      state.notes = payload;
    },
  },
});

export const { onAddNewFavorite, onDeleteFavorite, onSaving, onLoadFavorites } =
  agentSlice.actions;

export default agentSlice.reducer;
