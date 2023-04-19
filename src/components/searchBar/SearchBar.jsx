import React, { useEffect, useState } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useProduct } from "../../context/AddProductProvider";
import { useNavigate, useSearchParams } from "react-router-dom";

// =============
import { motion } from "framer-motion";

const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (castom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: castom * 0.3 },
  }),
};
// =============

const SearchBar = () => {
  const { getProducts, fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      style={{ overflow: "hidden", width: "100%", height: "100%" }}
      className="searchsarcontainer"
    >
      <div className="searchBar" style={{ width: "100%", height: "100%" }}>
        <motion.div variants={blockAnimation} castom={3}>
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
        </motion.div>
        <motion.div variants={blockAnimation} castom={2}>
          <IconButton>
            <SearchIcon />
            <input
              type="text"
              placeholder="Поиск"
              style={{ width: "100%", height: "100%" }}
            />
          </IconButton>
        </motion.div>
        <motion.button variants={blockAnimation}>Фильтр</motion.button>
        {/* <IconButton onClick={() => navigate("/favorite")}>
          <BookmarkIcon sx={{ color: "white" }} />
<<<<<<< HEAD
        </IconButton>
=======
        </IconButton> */}
        <input type="date" />
        <input type="date" />
>>>>>>> 54b5b2198d866feb56aa215bc3856891b0d6d8f8
      </div>
    </motion.div>
  );
};

export default SearchBar;
