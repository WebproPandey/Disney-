import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/reducers/UserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
