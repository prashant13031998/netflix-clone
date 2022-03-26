const API_KEY = "063024d61bdda7dedc3c6a75cc92d7ff";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoveis: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentories: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
