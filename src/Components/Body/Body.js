import React from "react";
import image from "./image.jpg";
import Search from "./Search";

const Body = () => {
  return (
    <>
      <div className="search-input">
        <Search />
      </div>
      <div className="body-image">
        <img src={image} alt="kids are reading" width="940px" />
      </div>
    </>
  );
};

export default Body;