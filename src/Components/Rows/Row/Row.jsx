import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../Utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);

        // https://api.themoviedb.org/3/discover/tv?api_key=3ee2372eb607484be10d843eddb6d65b&with_networks=213
        // console.log(request.data.results);

        setMovies(request.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      console.log("hahaha");
      console.log(trailerUrl);
    } else {
      movieTrailer(
        movie?.name || movie?.title || movie?.original_name,
        console.log(movie.name)
      )
        .then((url) => {
          // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
          // console.log(urlParams.get("v"));
          // console.log(movie);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const opts = {
    height: "300vh",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <section className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow}`}
          />
        ))}
      </div>

      <div>
        {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : "?"}
      </div>
    </section>
  );
}

export default Row;
