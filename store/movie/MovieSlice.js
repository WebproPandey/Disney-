import { createSlice } from "@reduxjs/toolkit";
import moviesData from "../../src/moviedata/movieinfo";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: moviesData.movies,
    watchlist: []
  },
  reducers: {
    addMovieToWatchlist: (state, action) => {
      const movie = action.payload;
      if (!state.watchlist.some((item) => item.id === movie.id)) {
        state.watchlist.push(movie);
      }
    },
    removeMovieFromWatchlist: (state, action) => {
      const movieId = action.payload;
      state.watchlist = state.watchlist.filter((movie) => movie.id !== movieId);
    },
  }
});

export const { addMovieToWatchlist, removeMovieFromWatchlist } = movieSlice.actions;

export const selectMoviesByType = (state, type) =>
  Object.values(state.movies.movies).filter((movie) => movie.type === type);

export const selectMovieById = (state, id) =>
  Object.values(state.movies.movies).find((movie) => movie.id === id);

export const selectWatchlist = (state) => state.movies.watchlist;

export default movieSlice.reducer;
