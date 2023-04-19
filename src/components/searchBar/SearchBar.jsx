import React, { useEffect, useState } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, IconButton } from "@mui/material";
import { useProduct } from "../../context/AddProductProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContextProvider";
import { getCountProductsInCart } from "../../helpers";

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
  const [count, setCount] = useState(0);
  const { addProductToCart } = useCart();

  // ================================================

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  // ===============================================

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  // ===============================================

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  // ===============================================

  return (
    <>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      style={{ overflow: "hidden", width: "100%", height: "100%" }}
      className="searchsarcontainer"
    >
      <div className="searchBar" style={{ width: "100%", height: "100%" }}>
        <motion.div variants={blockAnimation} castom={3}>
          {/* <select
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
          </select> */}
        </motion.div>
        <motion.div variants={blockAnimation} castom={2}>
          <IconButton>
            <SearchIcon />
            <input type="text" onChange={(e)=>fetchByParams('search',e.target.value)} />
          </IconButton>
        </motion.div>
        <motion.button variants={blockAnimation}>Фильтр</motion.button>

        <Badge badgeContent={count} color="primary">
          <IconButton onClick={() => navigate("/cart")}>
            <AddShoppingCartIcon color="primary" />
          </IconButton>
        </Badge>
       
        <motion.button variants={blockAnimation}>Фильтр</motion.button>
       
        <input type="date" />
        <input type="date" />
      </div>
    </motion.div>
    </>
  );
};

export default SearchBar;
