import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

const Header = () => {
  const bieldLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };
  return (
    <header>
      <nav className="css.nav">
        <NavLink to="/" className={bieldLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={bieldLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
