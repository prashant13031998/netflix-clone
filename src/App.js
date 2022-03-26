import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import React from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

// https://api.themoviedb.org/3/movie/550?api_key=063024d61bdda7dedc3c6a75cc92d7ff
function App() {
  return (
    <div className="app">
      <Nav />
      {/* navbar */}

      <Banner />
      <Row
        title="NETFLIX-ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.getchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMoveis} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentories} />
    </div>
  );
}

export default App;
