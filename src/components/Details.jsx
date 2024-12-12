// src/components/Details.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovieById  } from "../../store/movie/MovieSlice";
import { useDispatch } from "react-redux";
import { addMovieToWatchlist } from "../../store/movie/MovieSlice";



const Details = () => {
  const { id } = useParams(); // Get movie ID from URL
  const movie = useSelector((state) => selectMovieById(state, id)); // Fetch movie data by ID

  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  const languages = Object.keys(movie?.Language || {}).filter(
    (lang) => movie.Language[lang]
  );

  const handleLanguageClick = (lang) => {
    setSelectedLanguage(lang);
  };

  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!movie) {
    return <div className="text-center text-white">Movie not found!</div>;
  }
  const dispatch = useDispatch();

  const handleAddToWatchlist = () => {
    dispatch(addMovieToWatchlist(movie));
  };

  return (
    <div className="DetailContainer h-screen w-full px-2 md:px-10 pt-[10vw] md:pt-[5vw] ">
     <div className="wraper h-full w-full relative flex justify-end items-center ">
    <div className="backgroundimg h-1/2 md:h-full w-full absolute  top-0 left-0 z-[2]">
      <img
        src={movie.backgroundImg}
        className="h-full w-full object-cover"
        alt={movie.title}
      />
    </div>
    <div className="Introdcution    md:h-full w-full md:w-[50%] flex flex-col gap-3 items-start pt-[4vw] px-4 md:px-[3vw] relative">
      <div className="titleimg w-full max-w-xs md:max-w-full  z-[3] relative ">
        <img
          className="h-full w-full object-contain z-[3]"
          src={movie.titleimg}
          alt={movie.title}
        />
      </div>
      <div className="latested">
        <h1 className="text-blue-400 font-[600] text-[4vw] md:text-[1.3vw]">
          {movie.relasetype}
        </h1>
      </div>
      <div className="movieInfo flex flex-col gap-3">
        <div className="About text-white text-sm  mt-[10vw] md:mt-4 flex gap-2 text-[4vw] md:text-[1.3vw] font-semibold">
          <div className="flex items-center space-x-[5px] md:space-x-2">
            <span>{movie.About.year}</span>
            {movie.About.seasson && (
              <>
                <span className="text-gray-500">&bull;</span>
                <span>Season {movie.About.seasson}</span>
              </>
            )}
            <span className="text-gray-500">&bull;</span>
            <span>{movie.About.runTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">&bull;</span>
            <span>{movie.About.lag}</span>
            <span className="text-gray-500">&bull;</span>
            <span>{movie.About.certif}</span>
          </div>
        </div>
        <div className="description">
          <p className="text-[4vw] md:text-[1.3vw] text-white capitalize">
            {movie.description}
          </p>
        </div>
        <div className="moviegenre flex flex-wrap gap-2">
          {Object.keys(movie.genre)
            .filter((genre) => movie.genre[genre])
            .map((genre, index) => (
              <span
                key={index}
                className="text-[4vw] md:text-[1.4vw] font-[500] rounded-full ml-2"
              >
                {genre.replace("_", " ")} |
              </span>
            ))}
        </div>
        <div className="Language flex flex-wrap gap-3">
          {languages.map((lang, index) => (
            <button
              key={index}
              onClick={() => handleLanguageClick(lang)}
              className={`px-4 py-2 rounded-full text-[3vw] md:text-base ${
                selectedLanguage === lang
                  ? "bg-gray-200/20 text-white"
                  : "bg-transparent text-gray-300"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="  flex   md:flex-row absolute bottom-5 justify-between items-center mt-8 z-[11] w-full md:px-4">
      <div className="leftside     md:w-[40%] flex flex-row gap-4 md:gap-0 md:justify-between items-center">
        <a href="">
          <button className="bg-white text-[2.5vw] md:text-[1.3vw] text-black font-semibold  px-2 md:px-[8vw] py-3 md:py-4 rounded-md flex items-center justify-start gap-2 hover:scale-[1.05] transition-transform duration-300 ease-in-out">
            <i className="ri-play-large-fill"></i>
            Subscribe to Watch
          </button>
        </a>

        <div
          className="WatchList text-white text-[2.5vw] md:text-[2vw] bg-gray-200/20 flex justify-center items-center   p-3 md:px-5 rounded-lg hover:scale-[0.9] transition-transform duration-300 ease-in-out"
          onClick={handleAddToWatchlist}
        >
          <button>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
      <div className="RightSide  md:w-[40%] flex flex-row gap-4 md:gap-0 justify-end items-center pr-4 md:pr-[2vw]">
        <button className="bg-white text-[2.5vw] md:text-[1.2vw] text-black font-semibold px-2  md:px-4 py-3 rounded-md">
          Watch Trailer
        </button>
        <button onClick={toggleMute} className="p-2">
          {isMuted ? (
            <i className="ri-volume-up-fill text-[3vw] md:text-[1.5vw]"></i>
          ) : (
            <i className="ri-volume-off-vibrate-fill text-[3vw] md:text-[1.5vw]"></i>
          )}
        </button>
      </div>
    </div>
     </div>
    </div>
  ); 
};

export default Details;
