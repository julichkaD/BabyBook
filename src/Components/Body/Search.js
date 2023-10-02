import React from "react";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // console.log('Search query:', searchQuery);
  };

  return (
    <div className="search-container">
      <h1>Find You Baby's Perfect Book</h1>
      <form onSubmit={handleSearchSubmit} role="search">
        <input
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          type="search"
          placeholder="I am here to find a book"
          autofocus
          required
        />
        <button className="submit" type="submit">GO</button>
      </form>
    </div>
  );
};

export default Search;
