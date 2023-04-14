import { useProduct } from "../../context/AddProductProvider";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import "../products/ProductCard/ProductCard.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../products/ProductCard/ProductCard.css";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();

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
        </>
      ) : null}
    </div>
  );
};

// export default ProductCard;

export default function ProductCart() {
  return (
    <>
      <div className="card_container">
        <div className="card">
          <img
            className="card_img"
            src="https://images1.forrent.com/i2/E3zvIn__tkSSQUFHPjQx8xI-RpJk3wBs-OtriMehrPA/112/image.png"
            alt=""
          />
          <div className="card_body">
            <h1 className="card_title">Apartment</h1>
            <p className="card_sub_title">apartment 1</p>
            <p className="card_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              quisquam voluptas iste modi, sit nam velit eligendi error quae
              optio unde harum ducimus rerum ipsam asperiores hic necessitatibus
              commodi eius?
            </p>{" "}
            <div className="product-total">
              <h3>Цена</h3>
              <p>$500.00</p>
              {/* <p>⭐️⭐️⭐️⭐️⭐️</p> */}
            </div>
            <div className="product-btns">
              <div>
                <IconButton>
                  <FavoriteIcon className="cerdse" />
                </IconButton>
                <IconButton>
                  {" "}
                  <LocalGroceryStoreIcon className="korzina" />
                </IconButton>
              </div>

              {/* {email === ADMIN ? ( */}
              <div className="card__action">
                <IconButton
                  className="btn__delete"
                  // onClick={() => deleteProduct(item.id)}
                >
                  <DeleteIcon color="secondary" />
                </IconButton>
                <IconButton
                  className="btn__edit"
                  // onClick={() => navigate(/edit/${item.id})}
                >
                  <EditIcon color="secondary" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            className="card_img"
            src="https://images1.forrent.com/i2/E3zvIn__tkSSQUFHPjQx8xI-RpJk3wBs-OtriMehrPA/112/image.png"
            alt=""
          />
          <div className="card_body">
            <h1 className="card_title">Apartment</h1>
            <p className="card_sub_title">apartment 1</p>
            <p className="card_info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              quisquam voluptas iste modi, sit nam velit eligendi error quae
              optio unde harum ducimus rerum ipsam asperiores hic necessitatibus
              commodi eius?
            </p>{" "}
            <div className="product-total">
              <h3>Цена</h3>
              <p>$500.00</p>
              {/* <p>⭐️⭐️⭐️⭐️⭐️</p> */}
            </div>
            <div className="product-btns">
              <div>
                <IconButton>
                  <FavoriteIcon className="cerdse" />
                </IconButton>
                <IconButton>
                  {" "}
                  <LocalGroceryStoreIcon className="korzina" />
                </IconButton>
              </div>

              {/* {email === ADMIN ? ( */}
              <div className="card__action">
                <IconButton
                  className="btn__delete"
                  // onClick={() => deleteProduct(item.id)}
                >
                  <DeleteIcon color="secondary" />
                </IconButton>
                <IconButton
                  className="btn__edit"
                  // onClick={() => navigate(/edit/${item.id})}
                >
                  <EditIcon color="secondary" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
