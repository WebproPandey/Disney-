import {createSlice, isAction}  from  '@reduxjs/toolkit'

const initialState = {
    Recommanded: null,
    EntermentesRounde: null,
    Comedy: null,
    DisneyMovies:null,
    
  };

export  const MovieSlice = createSlice({
  name:"movie",
  initialState,
  reducers: {
    setMovies:(state , action) =>{
        state.Recommanded =  action.payload.Recommanded;
        state.EntermentesRounde = action.payload.EntermentesRounde;
        state.Comedy = action.payload.Comedy;
        state.DisneyMovies = action.payload.DisneyMovies;   
    }
  }

})

export const {setMovies} = MovieSlice.actions;
export default MovieSlice.reducer;

export const selectRecommanded = (state) => state.movie.Recommanded
export const selectEntermentesRounde = (state) => state.movie.EntermentesRounde
export const selectComedy = (state) => state.movie.Comedy
export const selectDisneyMovies = (state) => state.movie.DisneyMovies

