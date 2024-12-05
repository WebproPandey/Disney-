import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/reducers/UserSlice';
import movieReducer from '../store/movie/MovieSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
