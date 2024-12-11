import React from "react";
import { useSelector } from "react-redux";
import { selectMoviesByType } from "../../store/movie/MovieSlice";
import { Link } from "react-router-dom";

const DisneyMovies = ({ searchTerm }) => {
  const disneyMovies = useSelector((state) =>
    selectMoviesByType(state, "DisneyMovies")
  );

  const filteredMovies = disneyMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="Container md:px-6 md:mt-[2vw]">
      <h4 className="text-[1.7vw] font-semibold">Disney Movies</h4>
      <div className="wraper mt-[5px] w-full flex gap-6 overflow-x-auto py-[20px]">
        {filteredMovies.map((movie, index) => {
          const movieSlug = movie.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
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

export default DisneyMovies;
