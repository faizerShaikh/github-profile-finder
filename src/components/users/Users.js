import React from "react";
import Spinner from "../layouts/Spinner";
import User from "./User";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='d-flex flex-wrap justify-content-evenly container'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
