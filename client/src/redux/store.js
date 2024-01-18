import { configureStore } from '@reduxjs/toolkit';
import responseReducer from './responseSlice';

export const store = configureStore({
  reducer: {
    response: responseReducer,
  },
});
