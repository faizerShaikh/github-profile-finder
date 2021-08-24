import React, { Fragment } from "react";
import spinner from "./spinner-gif-16.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='spinner gif'
        width='300'
        height='300'
        className='d-block mx-auto'
      />
    </Fragment>
  );
};

export default Spinner;
