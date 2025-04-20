import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ data }) => {
  console.log(data, 123);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`movies/${item.id}`}>{item.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;

{
  /* <Link to={item.id.toString()}>{item.original_title}</Link> */
}
