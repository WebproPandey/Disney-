import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWatchlist , removeMovieFromWatchlist } from "../../store/movie/MovieSlice";
import { Link } from "react-router-dom";

const WatchList = () => {
  const watchlist = useSelector(selectWatchlist);
  const dispatch =  useDispatch()
  const handleRemoveClick = (id) => {
    dispatch(removeMovieFromWatchlist(id)); // Remove the movie by ID
  };


  if (watchlist.length === 0) {
    return <div className="text-center text-[10vw] text-white pt-[20vw]">Your Watchlist is Empty!</div>;
  }

  return (
    <div className="watchlist-container text-white px-4 md:px-10 pt-[20vw] md:pt-[8vw] ">
      <h1 className="text-[5vw] md:text-3xl font-bold mb-6">Your WatchList</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 md:gap-6 gap-2">
        {watchlist.map((movie) => (
          <div  key={movie.id} 
          className="movie-card hover:scale-[1.1] h-[45vh] w-[25vh] md:w-[32vh] md:h-[50vh] flex flex-col justify-between transition-transform duration-300 ease-in-out"
          >
            <div className="border-[3px] border-[#f9f9f91a]  h-full   w-full flex justify-between items-center flex-col"> 
              <div className="h-[80%]  w-full ">
              <Link to={`/detail/${movie.id}`}>     
                 <img src={movie.cardImg} alt={movie.title} className="  h-full  w-full  object-cover"/>
              </Link>
              </div>
            <button
              onClick={() => handleRemoveClick(movie.id)}
              className="border-[1px] text-[3vw] md:text-[1.1vw] text-white px-2 py-2 mt-4 rounded-sm self-center">
              Remove from WatchList
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
