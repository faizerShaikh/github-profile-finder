import React from "react";
import Spinner from "../layouts/Spinner";
import User from "./User";

const Users = ({ movies, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='d-flex flex-wrap justify-content-evenly container'>
        {movies.map((movie) => (
          <User
            key={movie.id}
            movie={movie}
            getSimgleMovie={getSingleMovie(id)}
          />
        ))}
      </div>
    );
  }
};

export default Users;
