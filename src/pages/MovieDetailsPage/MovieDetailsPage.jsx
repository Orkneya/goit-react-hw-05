import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovie } from "../../services/api";
import { isCancel } from "axios";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const getDate = async () => {
      try {
        const data = await fetchMovie(movieId, abortController.signal);
        console.log(data, 333);
        // setMovies((prev) => [...prev, ...data.results]);
        setMovie(data);
      } catch (error) {
        if (isCancel(error)) {
          console.log("Запит скасований користувачем");
          return;
        }
        toast.error("❌ Error fetching movie:", error);
        console.log(error);
      }
    };

    getDate();
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      <Toaster />
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h2>
        {movie.title} (
        {movie.release_date ? new Date(movie.release_date).getFullYear() : "—"}){" "}
      </h2>
      <p>User Score : {Math.round(movie.vote_average * 10)}%</p>
      <h3>OverView</h3>
      <p>{movie.overview}</p>
      <hr className={css.line} />
      <h3>Additional information</h3>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
// backdrop_path
