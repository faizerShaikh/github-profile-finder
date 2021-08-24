import React from "react";
function user(props) {
  const { id, avatar_url, login } = props.user;
  return (
    <div
      className='d-flex flex-column my-3 p-2 border border-dark rounded'
      key={id}
      style={{ width: "300px" }}
    >
      <img
        src={avatar_url}
        className='rounded-circle mx-auto'
        width='50'
        height='50'
      />
      <div className='py-1'>
        <h3 className='h3 fs-5 text-center'>{login}</h3>
      </div>
      <button type='button' className='btn btn-dark mx-auto'>
        More
      </button>
    </div>
  );
}

export default user;
