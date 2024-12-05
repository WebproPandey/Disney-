import React from "react";
import { useSelector } from "react-redux";
import { selectMoviesByType } from "../../store/movie/MovieSlice";
import { Link } from "react-router-dom";

const Comedy = () => {
    const comdeyMovies = useSelector((state) => selectMoviesByType(state, "comdey"));

  return (
    <div className="Container md:px-6 md:mt-[2vw] ">
    <h4 className="text-[1.7vw] font-semibold">Comdey Movies</h4>
    <div className="wraper mt-[5px] w-full flex gap-6 overflow-x-auto py-[20px]">
        {comdeyMovies.map((movie, index) => (
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

export default Comedy