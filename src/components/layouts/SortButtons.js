import React, { Fragment } from "react";

const SortButtons = ({ getPopuler, getUpcomimg, getNowPlaying }) => {
  return (
    <Fragment>
      <div className='d-flex justify-content-start py-3 container'>
        <button
          type='button'
          className='btn border border-2 border-danger text-danger fw-bold me-3'
          onClick={getPopuler}
        >
          Populer
        </button>
        <button
          type='button'
          className='btn border-2 border-success text-success fw-bold me-3'
          onClick={getUpcomimg}
        >
          Upcoming
        </button>
        <button
          type='button'
          className='btn border-2 border-warning text-warning fw-bold me-3'
          onClick={getNowPlaying}
        >
          Now Playing
        </button>
      </div>
    </Fragment>
  );
};

export default SortButtons;
