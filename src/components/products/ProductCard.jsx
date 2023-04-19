import * as React from "react";
import { useProduct } from "../../context/AddProductProvider";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../products/ProductCard.css";
import AddCommentIcon from "@mui/icons-material/AddComment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContextProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAddComments } from "../../context/AddCommentsProvider";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers";

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

export default function ProductCart({ item }) {
  const { deleteProduct, updateProduct } = useProduct();
  const { createRating } = useAddComments();
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useCart();
  const { user } = useAuth();
  const [rating, setRating] = React.useState(0);

  function saveRating() {
    const newLike = new FormData();
    newLike.append("rating", rating);
    newLike.append("apartment_id", item.id);
    createRating(newLike);
  }

  return (
    <div className="qwerty">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
        className="card_container"
      >
        <motion.div
          variants={blockAnimation}
          castom={1}
          className="card"
          style={{ width: "100%", height: "100%" }}
        >
          <img
            className="card_img"
            // style={{ width: "600px", height: "500px" }}
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
                <p>{item.price}сом</p>
              </div>
              <div className="Rating">
                <div>
                  <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                  />
                </div>

                <div className="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label htmlFor="star5" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star4" name="rate" value="4" />
                  <label htmlFor="star4" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star3" name="rate" value="3" />
                  <label htmlFor="star3" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star2" name="rate" value="2" />
                  <label htmlFor="star2" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star1" name="rate" value="1" />
                  <label htmlFor="star1" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="product-btns">
              <div>
                <div>
                  <IconButton>
                    <BookmarkAddIcon className="qwerty" />
                  </IconButton>
                  <IconButton onClick={() => addProductToCart(item)}>
                    <AddShoppingCartIcon
                      color={checkProductInCart(item.id) ? "primary" : ""}
                    />
                  </IconButton>
                  {user ? (
                    <IconButton onClick={() => navigate(`/coment/${item.id}`)}>
                      <AddCommentIcon className="qwerty" />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => alert("Войдите или зарегистрируйтесь")}
                    >
                      <AddCommentIcon className="qwerty" />
                    </IconButton>
                  )}

                  <IconButton>
                    <CalendarMonthIcon className="qwerty" input type="date" />
                  </IconButton>
                </div>

                <Button
                  style={{ width: "100%", height: "100%" }}
                  className="btnOfCard_BOOKING"
                  onClick={() => navigate("/bank/card")}
                >
                  Арендовать
                </Button>
              </div>

              {item.user === user || ADMIN === user ? (
                <div className="card__action">
                  <IconButton
                    className="btn__delete"
                    onClick={() => deleteProduct(item.id)}
                  >
                    <DeleteIcon className="qwerty" color="secondary" />
                  </IconButton>
                  <IconButton
                    className="btn__edit"
                    onClick={() => navigate(`/edit/${item.id}`)}
                  >
                    <EditIcon className="qwerty" color="secondary" />
                  </IconButton>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
