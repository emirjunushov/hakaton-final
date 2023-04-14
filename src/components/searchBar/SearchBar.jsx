import React from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const SearchBar = () => {
  return (
    <div className="searchsarcontainer">
      <div className="searchBar">
        <div>
          <IconButton>
            <SearchIcon />
            <input type="text" />
          </IconButton>
        </div>
        <div>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select name="test" id="">
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
        </div>
        <button>Фильтр</button>
      </div>
    </div>
  );
};

export default SearchBar;
