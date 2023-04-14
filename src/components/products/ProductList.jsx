import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/AddProductProvider";
import PaginationList from "./PaginationList";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import SearchBar from "../searchBar/SearchBar";

const ProductList = () => {
  const { getProducts, products, pages } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function getPagesCount() {
    let pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="d-flex justify-content-center flex-wrap w-100%">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <PaginationList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getPagesCount={getPagesCount}
      />
    </div>
  );
};

export default ProductList;
