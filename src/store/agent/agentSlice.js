import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageSaved: '',
  favorites: [],
  agents: [],
};

export const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    onAddNewFavorite: (state, { payload }) => {
      state.favorites.push(payload);
      state.isSaving = false;
      state.messageSaved = `${payload.title}: Actualizada correctamente!`;
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
      state.favorites = payload;
    },
    onLoadAgents: (state, { payload }) => {
      state.agents = payload;
    },
    onLogoutAgents: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.favorites = [];
    },
    onSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
  },
});

export const {
  onAddNewFavorite,
  onDeleteFavorite,
  onSaving,
  onLoadFavorites,
  onLoadAgents,
  onLogoutAgents,
} = agentSlice.actions;

export default agentSlice.reducer;
