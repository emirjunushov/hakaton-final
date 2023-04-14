import React from "react";
import { useProduct } from "../../context/AddProductProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProduct();
  return (
    <div className="border border-dark m-3">
      <img src={item.images} width={200} alt="" />
      <h3>{item.user}</h3>
      <p>{item.street}</p>
      <p>{item.city}</p>
      <p>{item.rooms}</p>
      <p>{item.number_of_beds}</p>
      <p>{item.floor}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
      {item.user ? (
        <>
          <button onClick={() => navigate(`/edit/${item.id}`)}>edit</button>
          <button onClick={() => deleteProduct(item.id)}>delete</button>
          <button onClick={() => navigate(`/add/comment/${item.id}`)}>
            leave comment
          </button>
        </>
      ) : null}
    </div>
  );
};

export default ProductCard;
