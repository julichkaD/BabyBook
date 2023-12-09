import React from "react";
import image from "./image.jpg";
import Search from "./Search";
import  'bootstrap/dist/css/bootstrap.min.css';


const Body = () => {
  return (
    <div className="main-container">
      <div className="search-input">
        <Search />
      </div>
      <div className="body-image">
        <img src={image} alt="kids are reading" className="img-fluid" />
      </div>
    </div>
  );
};

export default Body;
