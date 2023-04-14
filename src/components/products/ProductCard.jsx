import * as React from "react";
import "../products/ProductCart.css";
import { useProduct } from "../../context/AddProductProvider";
// import styled from "@emotion/styled";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProduct();
  const [mouse, setMouse] = React.useState(false);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          src={item.images}
          style={{ width: "200px", height: "200px" }}
          alt=""
        />
        <p>rooms:{item.rooms}</p>
        <p>street:{item.street}</p>
        <p>city:{item.city}</p>
        <p>floor:{item.floor}</p>
        <p>price:{item.price}</p>
      </div>
    </div>
  );
}
