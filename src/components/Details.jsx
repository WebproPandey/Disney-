// src/components/Details.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovieById } from "../../store/movie/MovieSlice";

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

  return (
    <div className="DetailContainer h-screen w-full px-10 pt-[5vw]">
      <div className="wraper h-full w-full relative">
        <div className="backgroundimg h-full w-full absolute top-0 left-0 z-[9]">
          <img
            src={movie.backgroundImg}
            className="h-full w-full object-cover"
            alt={movie.title}
          />
        </div>
        <div className="Introdcution z-[11] h-full w-[50%] flex gap-3 flex-col items-start pt-[4vw] px-[3vw] relative">
          <div className="titleimg">
            <img
              className="h-full w-full object-cover"
              src={movie.titleimg}
              alt={movie.title}
            />
          </div>
          <div className="latested">
            <h1 className="text-blue-400 font-[600] text-[1.3vw]">
              {movie.relasetype}
            </h1>
          </div>
          <div className="movieInfo flex flex-col gap-3">
            <div className="About text-white text-sm mt-4 flex gap-2 text-[1.3vw] font-semibold">
              <div className="flex items-center space-x-2">
                <span>{movie.About.year}</span>
                {movie.About.seasson && (
                  <>
                  <span className="text-gray-500">•</span>
                    <span>Seasson{movie.About.seasson}</span>
                  </>
                )}{" "}
                <span className="text-gray-500">•</span>
                <span>{movie.About.runTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">•</span>
                <span>{movie.About.lag}</span>
                <span className="text-gray-500">•</span>
                <span>{movie.About.certif}</span>
              </div>
            </div>
            <div className="description">
              <p className="text-[1.3vw] text-white capitalize">
                {movie.description}
              </p>
            </div>
            <div className="moviegenre">
              {Object.keys(movie.genre)
                .filter((genre) => movie.genre[genre])
                .map((genre, index) => (
                  <span
                    key={index}
                    className="text-[1.4vw] font-[500] rounded-full ml-2"
                  >
                    {genre.replace("_", " ")} |
                  </span>
                ))}
            </div>
            <div className="Language flex space-x-3">
              {languages.map((lang, index) => (
                <button
                  key={index}
                  onClick={() => handleLanguageClick(lang)}
                  className={`px-4 py-2 rounded-full ${
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
        <div className=" flex absolute bottom-5  justify-between items-center mt-8  z-[11] w-full">
          <div className="leftside w-[40%] h-full flex justify-between">
            <button className="bg-white text-[1.3vw] text-black font-semibold px-[8vw] py-4 rounded-md flex items-center gap-2">
              <i className="ri-play-large-fill"></i>
              Subscribe to Watch
            </button>
            <div className="text-white text-[2vw] bg-gray-200/20 flex justify-center items-center px-5 rounded-lg">
              <i className="ri-add-line"></i>
            </div>
          </div>
          <div className="RightSide w-[40%] h-full flex justify-end items-center pr-[2vw]">
            <button className="bg-white text-[1.2vw] text-black font-semibold px-2 py-3 rounded-md">
              Watch Trailer
            </button>
            <button onClick={toggleMute} className="p-2">
              {isMuted ? (
                <i className="ri-volume-up-fill text-[1.5vw]"></i>
              ) : (
                <i className="ri-volume-off-vibrate-fill text-[1.5vw]"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
