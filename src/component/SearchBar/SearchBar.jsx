import React from "react";
import s from "./SearchBar.module.css";
// import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleChangeQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = e.target.elements.newMovie.value;
    if (!newMovie.trim()) {
      // toast.error("Please, enter movies..");
    } else {
      handleChangeQuery(newMovie);
    }
    console.log(newMovie, 888);
    e.target.reset(0);
  };
  return (
    <>
      {/* <Toaster /> */}
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="newMovie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
