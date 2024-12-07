import React from "react";
import { Link } from "react-router-dom";
import { selectMoviesByType } from "../../store/movie/MovieSlice";
import { useSelector } from "react-redux";
const EntermentesRounde = () => {
    const recommendedMovies = useSelector((state) => selectMoviesByType(state, "Entertainment"));

  return (
    <div className="Container md:px-6 md:mt-[2vw]">
    <h4 className="text-[1.7vw] font-semibold">Entertainment All-Rounders</h4>
    <div className="wraper mt-[5px] w-full flex gap-6 overflow-x-auto py-[20px]">
    {recommendedMovies.map((movie, index) => (
          <div key={index} className="Viewerbox">
          <Link to="/">
          <img src={movie.cardImg} alt={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  </div>
 )
}

export default EntermentesRounde