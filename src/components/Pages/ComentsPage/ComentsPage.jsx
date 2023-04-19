import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAddComments } from "../../../context/AddCommentsProvider";
import { useProduct } from "../../../context/AddProductProvider";

import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import "./ComentPage.css";
import { Avatar, IconButton, TextField } from "@mui/material";
import { Button } from "react-bootstrap";

const ComentsPage = () => {
  const { getOneProduct, oneProduct } = useProduct();
  const { PostOneComment, deleteComments, getComents, allComments } =
    useAddComments();
  console.log(allComments);
  const { id } = useParams();
  useEffect(() => {
    getComents();
  }, []);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  // !============================================
  const [comments, setComments] = React.useState("");
  const [apartment, setApartment] = React.useState("");
  useEffect(() => {
    setApartment(id);
  }, []);
  function handleSave() {
    let newProduct = new FormData();

    newProduct.append("text", comments);
    newProduct.append("apartment", apartment);
    PostOneComment(newProduct);
  }
  // !=============================================

  return (
    <div className="main_container">
      <div className="container_of_left_side">
        <img className="coment_images" src={oneProduct?.images} alt="" />

        <div className="conteiner_of_right_side">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11697.164363479633!2d74.58146585!3d42.8666998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81d3f4fffff%3A0x4e1b43a32667c19b!2sDe&#39;mar%20Hotel!5e0!3m2!1sru!2skg!4v1681731121571!5m2!1sru!2skg"
            width="250"
            height="200"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h3> {oneProduct?.user}</h3>
          <h4>
            <span>Цена: $</span>
            {oneProduct?.price}
          </h4>

          <h4>
            <span>Город:</span> {oneProduct?.city}
          </h4>
          <h4>
            <span>Улица:</span> {oneProduct?.street}
          </h4>
        </div>
      </div>
      <div style={{ marginLeft: "13%" }}>
        <div>
          <List className="coments_conteiner" sx={{ mb: 2, color: "white" }}>
            {allComments?.map((item) => (
              <React.Fragment key={allComments.id}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt={item.user} src="emir" />
                  </ListItemAvatar>
                  <ListItemText
                    className="text_comments"
                    primary={item.user}
                    secondary={item.text}
                  />

                  <IconButton onClick={() => deleteComments(item.id)}>
                    <DeleteIcon sx={{ color: "white" }} />
                  </IconButton>
                </ListItem>
              </React.Fragment>
            ))}
            <div>
              <TextField
                onChange={(e) => setComments(e.target.value)}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />

              <Button onClick={handleSave}>
                <SendIcon />
              </Button>
            </div>
          </List>

          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default ComentsPage;
