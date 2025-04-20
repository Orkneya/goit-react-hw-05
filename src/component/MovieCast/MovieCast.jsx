import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits, fetchMovieReviews } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getDate = async () => {
      try {
        const date = await fetchMovieCredits(movieId);
        console.log(date, 888);
        setCasts(date);
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, [movieId]);
  return (
    <div>
      <ul>
        {casts.map((item) => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              width={100}
            />
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
