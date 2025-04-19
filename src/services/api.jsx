import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
const API_KEY = "0216b580c4b22c51ff63504bc6bb87e3";
const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjE2YjU4MGM0YjIyYzUxZmY2MzUwNGJjNmJiODdlMyIsIm5iZiI6MTc0NDY0NjIwMy4xODIwMDAyLCJzdWIiOiI2N2ZkMzAzYjMxMTBiZDgyZGZhZDM5MzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1SUFTXsLREDaXdE1o5I7D_zgoBE0EWLBd6RoIOjL4mg";
// const url = `https://api.themoviedb.org/3/trending/movie/day`;
// const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const fetchMovies = async (query, signal) => {
  const url = query
    ? `${BASE_URL}/search/movie`
    : `${BASE_URL}/trending/movie/day`;
  const options = {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query: query,
      // page: page,
    },
    headers: {
      Authorization: TOKEN,
    },
    signal,
  };
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovie = async (movieId, signal) => {
  // https://api.themoviedb.org/3/movie/{movie_id}
  const url = `${BASE_URL}/movie/${movieId}`;

  console.log("url", url);

  const options = {
    params: {
      api_key: API_KEY,
      language: "en-US",
      query: query,
      id: movieId,
      // page: page,
    },
    headers: {
      Authorization: TOKEN,
    },
    signal,
  };
  const response = await axios.get(url, options);
  return response.data;
};
