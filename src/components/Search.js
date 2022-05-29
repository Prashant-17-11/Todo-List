import React from "react";
import "../styles/Search.css";

const Search = ({searchText, handleSearch}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchBar"
        className="form-control"
        style={{ maxWidth: "50%" }}
        value={searchText}
        onChange={handleSearch}
        placeholder="Type something to filter tasks..."
      />
      <i
        class="fa fa-search fa-2x"
        style={{marginLeft: "1%", color: "#777" }}
      ></i>
    </div>
  );
};

export default Search;
