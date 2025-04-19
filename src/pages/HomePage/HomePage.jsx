import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import s from "./HomePage.module.css";
import MoviesList from "../../component/MoviesList/MoviesList";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  // const [error, setError] = useState(false);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();
    const getDate = async () => {
      try {
        setLoading(true);
        // if (!query) {
        //   return;
        // }
        const data = await fetchMovies(query, abortController.signal);
        // console.log(data, 222)
        setMovies((prev) => [...prev, ...data.results]);
        // setMovies(data.result);
        setTotalPages(data.total_pages);
      } catch (error) {
        // setError(true);
        if (error.message === "canceled") {
          console.log("Запит скасований користувачем");
          return;
        }
        toast.error("❌ Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    getDate();
    return () => {
      abortController.abort();
    };
  }, [query]);

  return (
    <div>
      <Toaster />
      <h2 className={s.title}>Trending today</h2>
      <MoviesList data={movies} />
    </div>
  );
};

export default HomePage;
