import React from "react";
import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ data, flag }) => {
  console.log(data, 123);
  const location = useLocation();
  console.log(location, 567);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {flag ? (
              <Link state={location} to={`movies/${item.id}`}>
                {item.original_title}
              </Link>
            ) : (
              <Link state={location} to={`${item.id}`}>
                {item.original_title}
              </Link>
            )}
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
