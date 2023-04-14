import * as React from "react";
import "../products/ProductCart.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useProduct } from "../../context/AddProductProvider";
// import styled from "@emotion/styled";

export default function ProductCard({item}) {
  const {deleteProduct} = useProduct()
  const [mouse, setMouse] = React.useState(false);
  
  return (
    <>
      <div
        class="card"
        // onMouseOver={() => setMouse(true)}
        // onMouseOut={() => setMouse(false)}
      >
        {mouse ? (
          <div class="product-left">
            <div class="header">
              <h1></h1>
              <h2>Sit down in modern</h2>
            </div>
            {/* <!--DESCRIPITON / DETAILS--> */}
            <div class="product-main">
              <div class="focus">
                <span>Description</span>
                <span>Details</span>
              </div>
              <p>
                {item.rooms}
              </p>
            </div>
            {/* <!--CHOOSE PRODUCT DETAILS--> */}
            <div class="product-details">
              {/* <!--PRODUCT TOTAL--> */}
              <div class="product-total">
                <h3>{}</h3>
              </div>
            </div>
            {/* <!-- ADD TO CART BUTTON --> */}
            <div class="product-btns">
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                {" "}
                <LocalGroceryStoreIcon />
              </IconButton>

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
                  // onClick={() => navigate(`/edit/${item.id}`)}
                >
                  <EditIcon color="secondary" />
                </IconButton>
              </div>
              {/* ) : (
                ""
              )} */}
            </div>
          </div>
        ) : (
          ""
        )}

        <div class="product-right">
          <img
            className="product-right-img"
            src={item.images}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
