import axios from "axios";

//This will create base url to fetch the movies from url.
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
//If we do,
// instance.get("/some-URL");
//It will become "https://api.themoviedb.org/3/some-URL"

export default instance;
