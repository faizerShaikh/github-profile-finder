import React from "react";

function Navbar({ navIcon, websiteName }) {
  return (
    <nav className='row container py-2'>
      <div className='col-md-6'>
        <h3 className='h3 fs-4 fw-bold light'>
          <i className={navIcon}> </i>
          {websiteName}
        </h3>
      </div>
    </nav>
  );
}

export default Navbar;
