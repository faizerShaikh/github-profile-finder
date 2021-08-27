import React from "react";
function user(props) {
  const {
    poster_path,
    vote_average,
    popularity,
    original_language,
    original_title,
    adult,
    id,
  } = props.movie;
  return (
    <div
      className='d-flex flex-column my-3 p-2 rounded border-dark border'
      style={{
        width: "300px",
      }}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500/" + poster_path}
        className=' mx-auto'
        alt=''
        style={imgStyle}
      />
      <div className='py-1'>
        <div className='d-flex justify-content-between p-1'>
          <h3 className='h3 fs-5 fw-bold text-center'>{original_title}</h3>
          <p className='fw-bold fs-6 text-success'>{adult ? "18+" : "16+"}</p>
        </div>
        <h3 className='fs-6 fw-bold px-1' style={{ margin: "-10px 0 10px 0" }}>
          Language : <span className='text-danger'>{original_language}</span>
        </h3>
        <p className='fw-bold fs-6 px-1' style={{ margin: "-5px 0 10px 0" }}>
          Popularity : <span className='text-danger'>{popularity}</span>
        </p>
        <p className='fw-bold fs-6 px-1' style={{ margin: "-5px 0 10px 0" }}>
          Ratings :{" "}
          <span className='text-light bg-danger p-1 rounded'>
            {vote_average}
          </span>
        </p>
      </div>
      <button
        type='button'
        className='btn btn-dark btn-block mx-auto'
        onClick={getSingleMovie(id)}
      >
        More
      </button>
    </div>
  );
}

const imgStyle = {
  width: "100%",
  height: "150px",
  display: "block",
  objectFit: "cover",
  objectPosition: "center",
};
export default user;
