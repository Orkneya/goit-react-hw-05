import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
const API_KEY = "0216b580c4b22c51ff63504bc6bb87e3";
// const BASE_URL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};
axios.defaults.headers.common.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjE2YjU4MGM0YjIyYzUxZmY2MzUwNGJjNmJiODdlMyIsIm5iZiI6MTc0NDY0NjIwMy4xODIwMDAyLCJzdWIiOiI2N2ZkMzAzYjMxMTBiZDgyZGZhZDM5MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1SUFTXsLREDaXdE1o5I7D_zgoBE0EWLBd6RoIOjL4mg";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchMovies = async (signal) => {
  const url = `/trending/movie/day`;
  const options = {
    signal,
  };
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovie = async (movieId, signal) => {
  // https://api.themoviedb.org/3/movie/{movie_id}
  const url = `/movie/${movieId}`;
  console.log("urlMovie", url);
  const options = {
    params: {
      id: movieId,
    },
    signal,
  };
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const url = `/movie/${movieId}/reviews`;
  console.log("urlReviews", url);
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const url = `/movie/${movieId}/credits`;
  console.log("urlCards", url);
  const response = await axios.get(url);
  return response.data.cast;
};

export const fetchMovieQuery = async (query) => {
  const url = `/search/movie`;
  const options = {
    params: {
      query: query,
    },
  };
  console.log("urlCards", url);
  const response = await axios.get(url, options);
  return response.data;
};
