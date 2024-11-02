import React from "react";

const Footer = () => {
  return (
    <>
      <div className="FooterConatiner">
        <h1>Logo</h1>
        <div className="FooterList">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
          <ul>
            <li>Book Now</li>
            <li>Map</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="FooterForm">
          <input type="text" placeholder="I want to book..." />
          <button>Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
