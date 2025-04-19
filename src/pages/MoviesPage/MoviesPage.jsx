import { useEffect, useState } from "react";
import React from "react";
import s from "./MoviesPage.module.css";
import SearchBar from "../../component/SearchBar/SearchBar";

// const [query, setQuery] = useState("");

const handleChangeQuery = (newQuery) => {
  setQuery(newQuery);
  setImages([]);
  setPage(1);
};

const MoviesPage = () => {
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
    </>
  );
};

export default MoviesPage;
