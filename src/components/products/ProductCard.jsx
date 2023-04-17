import { useProduct } from "../../context/AddProductProvider";
import { useNavigate } from "react-router-dom";
import * as React from "react";
// import "../products/ProductCard/ProductCard.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "../products/ProductCart.css";

// =============
import { motion } from "framer-motion";
import { useFavorites } from "../../context/FavoritesContextProvider";
import { Button } from "react-bootstrap";

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

export default function ProductCart({ item }) {
  console.log(item);
  const { deleteProduct, updateProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        style={{ overflow: "hidden" }}
        className="card_container"
      >
        <motion.div variants={blockAnimation} castom={1} className="card">
          <img
            className="card_img"
            style={{ width: "600px", height: "500px" }}
            src={item.images}
            alt=""
          />
          <div className="card_body">
            <h1 className="card_title">{item.category}</h1>
            <p className="card_sub_title">{item.user}</p>
            <p className="card_sub_title">
              {item.city}:{item.street}
            </p>
            <p className="card_info">{item.description}</p>{" "}
            <div className="product-div">
              <div className="product-total">
                <h3>Цена</h3>
                <p>${item.price}</p>
              </div>
              <div className="Rating">
                <head>
                  <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                  />
                </head>

                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="product-btns">
              <div>
                <div>
                  <IconButton>
                    <BookmarkAddIcon className="cerdse" />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <LocalGroceryStoreIcon className="korzina" />
                  </IconButton>
                </div>

                <Button
                  className="btnOfCard_BOOKING"
                  onClick={() => navigate("/bank/card")}
                >
                  Арендовать
                </Button>
              </div>
              {/* {email === ADMIN ? ( */}
              <div className="card__action">
                <IconButton
                  className="btn__delete"
                  onClick={() => deleteProduct(item.id)}
                >
                  <DeleteIcon className="korzina" color="secondary" />
                </IconButton>
                <IconButton
                  className="btn__edit"
                  onClick={() => navigate(`/edit/${item.id}`)}
                >
                  <EditIcon className="korzina" color="secondary" />
                </IconButton>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
