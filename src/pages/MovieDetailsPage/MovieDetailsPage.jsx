import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovie } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log("movieId", movieId);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const getDate = async () => {
      try {
        const data = await fetchMovie(movieId, abortController.signal);
        console.log(data, 333);
        // setMovies((prev) => [...prev, ...data.results]);
        setMovie(data.result);
      } catch (error) {
        if (error.message === "canceled") {
          console.log("Запит скасований користувачем");
          return;
        }
        toast.error("❌ Error fetching movie:", error);
      }
    };
    getDate();
    return () => {
      abortController.abort();
    };
  }, [movie]);

  return (
    <div>
      <Toaster />
      {/* <img src={movie.backdrop_path} /> */}
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
