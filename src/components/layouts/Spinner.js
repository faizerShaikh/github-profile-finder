import React, { Fragment } from "react";
import spinner from "./spinner-gif-16.gif";
const Spinner = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center mx-auto'
      style={{ width: "90%", height: "90vh" }}
    >
      <img
        src={spinner}
        alt='spinner gif'
        width='150'
        height='120'
        className='d-block mx-auto mt-5'
      />
    </div>
  );
};

export default Spinner;
