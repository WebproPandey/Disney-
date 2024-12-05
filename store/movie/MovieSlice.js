import { createSlice } from "@reduxjs/toolkit";
import moviesData from "../../src/moviedata/movieinfo";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: moviesData.movies,
  },
  reducers: {}
});

export const selectMoviesByType = (state, type) =>
  Object.values(state.movies.movies).filter(movie => movie.type === type);

export default movieSlice.reducer;
