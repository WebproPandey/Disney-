import React from "react";
import { useSelector } from "react-redux";
import { selectMoviesByType } from "../../store/movie/MovieSlice";
import { Link } from "react-router-dom";

const Recommanded = () => {
  const recommendedMovies = useSelector((state) => selectMoviesByType(state, "recommend"));

  return (
    <div className="Container md:px-6 md:mt-[2vw]">
      <h4 className="text-[1.7vw] font-semibold">Latest Releases</h4>
      <div className="wraper mt-[5px] w-full flex gap-6 overflow-x-auto py-[20px]">
      {recommendedMovies.map((movie, index) => {
        const movieSlug = movie.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"); // Convert title to URL-friendly slug
         return (
         <div key={index} className="Viewerbox">
          <Link to={`/detail/${movie.id}`}>
            <img src={movie.cardImg} alt={movie.title} />
          </Link>
        </div>
      );
    })}
      </div>
    </div>
  );
};

export default Recommanded;
