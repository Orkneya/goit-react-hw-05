import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";
import s from "./HomePage.module.css";
import MoviesList from "../../components/MoviesList/MoviesList";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const getDate = async () => {
      try {
        setLoading(true);
        const data = await fetchMovies(abortController.signal);
        setMovies((prev) => [...prev, ...data.results]);
        // setMovies(data.result);
        setTotalPages(data.total_pages);
      } catch (error) {
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
  }, []);

  return (
    <div>
      <Toaster />
      <h2 className={s.title}>Trending today</h2>
      <MoviesList data={movies} flag={true} />
    </div>
  );
};

export default HomePage;
