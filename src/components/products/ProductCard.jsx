import * as React from "react";
import "../products/ProductCart.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import styled from "@emotion/styled";

export default function ProductCart() {
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
              <h1>Toro SLing Chair</h1>
              <h2>Sit down in modern</h2>
            </div>
            {/* <!--DESCRIPITON / DETAILS--> */}
            <div class="product-main">
              <div class="focus">
                <span>Description</span>
                <span>Details</span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione voluptatem quam vel, delectus expedita ullam asperiores
                laudantium modi. Voluptatum eum cum quis ea modi. Reiciendis
                asperiores aut beatae odit minima.
              </p>
            </div>
            {/* <!--CHOOSE PRODUCT DETAILS--> */}
            <div class="product-details">
              {/* <!--PRODUCT TOTAL--> */}
              <div class="product-total">
                <h3>Total Price</h3>
                <p>$1399.00</p>
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
            src="https://www.ccnova.ru/images/blog/sovremennye-doma/sovremennyj-dom-4.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
