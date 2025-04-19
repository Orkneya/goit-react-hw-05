import React from "react";
import s from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={s.content}>
      The page was not found.
      <Link to="/" className={s.button}>
        Go to the main page
      </Link>
    </div>
  );
};

export default NotFoundPage;
