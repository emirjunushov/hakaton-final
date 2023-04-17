import React from "react";
import "../Footer/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import batir from "./img_Footer/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navgate = useNavigate();
  return (
    <div>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div>
          <img className="logo_Footer" src={batir} alt="" />
        </div>

        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://ru-ru.facebook.com/">
              <ion-icon name="logo-facebook">
                <FacebookIcon />
              </ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://twitter.com/">
              <ion-icon name="logo-twitter">
                <TwitterIcon />
              </ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://ru.linkedin.com/">
              <ion-icon name="logo-linkedin">
                <LinkedInIcon />
              </ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.instagram.com/">
              <ion-icon name="logo-instagram">
                <InstagramIcon />
              </ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="/">
              <HomeIcon />
            </a>
          </li>

          <li className="menu__item">
            <a className="menu__link" href="#">
              Услуги
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" onClick={() => navgate("/team")}>
              Команда
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" onClick={() => navgate("/contacts")}>
              <PhoneIcon />
            </a>
          </li>
        </ul>
        <p>&copy;2023 Квартиры Бишкека | Все права защищены</p>
      </footer>
    </div>
  );
};

export default Footer;
