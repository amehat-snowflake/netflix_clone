import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";

function RowList() {
  return (
    <div>
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={"row_posterLarge"}
      />
      <Row title={"Trending"} fetchUrl={requests.fetchTrending} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
<Row title={"TvShow"} fetchUrl={requests.fetchTvShow} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Top Rated Movies"} fetchUrl={requests.fetchTopRatedMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default RowList;
