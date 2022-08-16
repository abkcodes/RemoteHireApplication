import React, { Component } from "react";
import "./SearchBar.css";
import Button from "@mui/material/Button";

function SearchBar(props) {
  return (
    <div className="user-search-and-filter">
      <div className="user-search">
        <input
          className="user-search-input"
          type="text"
          name="user"
          placeholder="Search user"
        ></input>
        <Button variant="outlined" id="searchuser" className="btn">
          Search
        </Button>
      </div>
      
    </div>
  );
}

export default SearchBar;

