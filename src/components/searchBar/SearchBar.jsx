import React, { useEffect, useState } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useProduct } from "../../context/AddProductProvider";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const { getProducts, fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  useEffect(()=> {
    getProducts();

  }, [searchParams ])
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
          <select
            defaultValue="all"
            onChange={(e) => fetchByParams("rooms", e.target.value)}
          >
            <option value="1" label="1">
              1
            </option>
            <option value="2" label="2">
              2
            </option>
            <option value="3" label="3">
              3
            </option>
          </select>
          <select
            name="test"
            id=""
            defaultValue="all"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select
            name="test"
            id=""
            defaultValue="all"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select
            name="test"
            id=""
            defaultValue="all"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select
            name="test"
            id=""
            defaultValue="all"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select
            name="test"
            id=""
            defaultValue="all"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <option value="">none</option>
            <option value="">test</option>
            <option value="">test</option>
          </select>
          <select
            name="test"
            id=""
            defaultValue="all"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
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
