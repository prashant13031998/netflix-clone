import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      const randomMovie = request.data.results[randomNumber];

      setMovie(randomMovie);
      return request;
    };
    fetchData();
  }, []);

  //   console.log(movie);

  const truncate = function (str, n) {
    const newStr = str?.length > n ? str.substr(0, n - 1) + "..." : str;
    return newStr;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      {/* <<< BacgroundImage */}
      <div className="banner__contents  ">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* title */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* div > 2 buttons */}

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        {/* description */}
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
