import React, { useEffect } from "react";
import { useProduct } from "../../context/AddProductProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
