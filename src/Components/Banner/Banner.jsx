import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function bannerData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error.message);
      }
    }
    bannerData();
  }, []);

  // console.table(movie);

  function trunc(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }

  return (
    <section
      /*banner image*/
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* buttons */}
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* description */}
        {/* <div>{movie?.overview}</div> */}
        <h1 className="banner_description">{trunc(movie?.overview, 100)}</h1>
      </div>
      <div className="banner_fade" />
    </section>
  );
}

export default Banner;
