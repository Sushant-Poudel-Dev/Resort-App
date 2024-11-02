import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="navbarlist">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>
            <button>Book Now</button>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
