import React from "react";
import "./Navbar.css";
import spotify from "../../IMAGES/iconOfSpotify.svg";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <div className="main_nav_container">
      <div>
        <img className="nav_icons" src={spotify} alt="" />
      </div>
      <div className="container_of_icons">
        <div>
          <IconButton color="white">
            <HomeIcon className="home_icon" />
            Главная
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
