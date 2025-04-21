import { useEffect, useState } from "react";
import React from "react";
import s from "./MoviesPage.module.css";
import SearchBar from "../../component/SearchBar/SearchBar";
import { fetchMovieQuery } from "../../services/api";
import MoviesList from "../../component/MoviesList/MoviesList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };
  useEffect(() => {
    const getDate = async () => {
      if (!query.trim()) return;
      try {
        const date = await fetchMovieQuery(query);
        console.log(date, 456);
        setMovies(date.results);
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, [query]);

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {<MoviesList data={filterMovies} flag={false} />}
    </>
  );
};

export default MoviesPage;
