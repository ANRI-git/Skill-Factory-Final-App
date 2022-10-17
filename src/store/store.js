import { configureStore } from '@reduxjs/toolkit';
import agentSlice from './agent/agentSlice';
import authSlice from './auth/authSlice';
import uiSlice from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    agent: agentSlice,
    ui: uiSlice,
  },
});
