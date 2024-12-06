import React, { useState } from "react";

const Details = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  const languages = ["Hindi", "Tamil", "Telugu", "English Original"];

  const handleLanguageClick = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <div className="DetailContainer  h-screen w-full px-10 pt-[5vw] ">
      <div className="wraper  h-full w-full relative ">
        <div className="backgroundimg h-full w-full absolute top-0 left-0 z-[9]">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6565/1732508956565-i"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="z-[11] h-auto  w-[40%]  flex flex-col  items-start pt-[4vw] px-[3vw] relative">
          <div className="titleimg h-auto w-[30vw] ">
            <img
              className="h-full w-full  object-cover"
              src="https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/3788/1732508933788-t"
              alt=""
            />
          </div>
          <div className="latested">
            <h1 className="text-blue-400 font-[600] text-[1.3vw]">
              Newly Added
            </h1>
          </div>
          <div className="movieInfo ">
            <div className="text-white text-sm mt-4 flex  gap-2 text-[1.3vw] font-semibold">
              <div className="flex items-center space-x-2">
                <span>2024</span>
                <span className="text-gray-500">•</span>
                <span>1h 58m</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">•</span>
                <span>4 Languages</span>
                <span className="text-gray-500">•</span>
                <span>A</span>
              </div>
            </div>
            <div className="description">
              <p className="text-[1.3vw] text-white capitalize">
                young space colonizers come face-to-face with the ultimate
                horror.
              </p>
            </div>
            <div className="moviegenre">
              <span className="text-[1.4vw] font-[500] rounded-full ">
                Science Fiction |
              </span>
              <span className="text-[1.4vw] font-[500] rounded-full  ml-2">
                Horror |
              </span>
              <span className="text-[1.4vw] font-[500] rounded-full  ml-2">
                Thriller |
              </span>
              <span className="text-[1.4vw] font-[500] rounded-full  ml-2">
                Alien
              </span>
            </div>
            <div className="Language flex space-x-3">
              {languages.map((lang, index) => (
                <button
                  key={index}
                  onClick={() => handleLanguageClick(lang)}
                  className={`px-4 py-2 rounded-full ${
                    selectedLanguage === lang
                      ? " bg-gray-200/20 text-white" 
                      : "bg-transparent text-gray-300" 
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
           
          </div>
          
        </div>
        <div className="flex  mt-8 relative z-[11] w-full">
            <button className="bg-white text-[1.3vw]  text-black font-semibold px-[8vw] py-4  rounded-md">
               <i className="ri-play-large-fill"></i>
               Subscribe to Watch
            </button>
            <div className=" text-white text-[2vw] bg-gray-200/20 flex justify-center items-center  px-5   rounded-lg ">
               <i className="ri-add-line"></i> 
            </div>  
    
        </div>
      </div>
    </div>
  );
};

export default Details;
