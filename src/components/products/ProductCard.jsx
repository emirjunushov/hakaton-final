import { useProduct } from "../../context/AddProductProvider";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../products/ProductCard.css";
import "./ProductAdaptiv.css";

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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              odio.safasfsfasasdsdcdsdsqADSVFFSFVSDVDSVSqwerfggfdvxvvsv
            </p>{" "}
            <div className="product-div">
              <div className="product-total">
                <h3>Цена</h3>
                <p>$500.00</p>
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
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>

                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    <i className="fa fa fa-star" aria-hidden="true"></i>
                  </label>
                </div>
              </div>
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
