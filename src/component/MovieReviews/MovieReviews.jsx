import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import axios, { isCancel } from "axios";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getDate = async () => {
      try {
        const response = await axios.get(`/movie/${movieId}/reviews`);
        console.log("Reviews:", response.data.results);
        // const date = await fetchMovieReviews(movieId);
        // console.log(data, 555);
        setReviews(response.data.results);
      } catch (error) {
        if (isCancel(error)) {
          console.log("Запит скасований користувачем");
          return;
        }
        toast.error("❌ Error fetching reviews:", error);
        console.log(error);
      }
    };
    getDate();
  }, [movieId]);
  return (
    <div>
      <Toaster />
      {/* if (!reviews) */}
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
// We don`t have any reviews `for this movie.
