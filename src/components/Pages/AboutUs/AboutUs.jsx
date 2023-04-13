import React from "react";
import "../AboutUs/AboutUs.css";
import canuzel from "../../../IMAGES/imgAboutUs/bathroom.jpg";
import bedroom from "../../../IMAGES/imgAboutUs/bedroom.jpg";
import hall from "../../../IMAGES/imgAboutUs/hall.jpg";
import hallway from "../../../IMAGES/imgAboutUs/hallway.png";
import kitchen from "../../../IMAGES/imgAboutUs/kitchen.jpg";
import avangard from "../../../IMAGES/imgAboutUs/Avangardlogo.png";
import elitehous from "../../../IMAGES/imgAboutUs/EH_logo_w.png";
import emark from "../../../IMAGES/imgAboutUs/logovEmark.png";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h4>Квартира</h4>
      <p>
        {" "}
        один из видов жилого помещения, состоящий из одной или нескольких
        смежных комнат, в некоторых случаях с отдельным наружным выходом,
        составляющее отдельную часть дома.
        <br /> Ваш дом — это место семейного очага.
      </p>

      <div className="auCards">
        <div className="aboutCard">
          <img
            style={{ width: "300px", height: "400px" }}
            src={kitchen}
            alt=""
          />
          <div className="textkv">
            <p>
              Кухня — это сердце и душа любого дома и оно предназначено для
              приготовления еды для семьи и гостей
            </p>
          </div>
        </div>
        <div className="aboutCard">
          <img
            style={{ width: "300px", height: "400px" }}
            className="kv"
            src={bedroom}
            alt=""
          />
          <p className="textkv">
            Спальня — комната в жилище, место в помещении (доме, квартире и так
            далее) для сна и отдыха.
          </p>
        </div>
        <div className="aboutCard">
          <img
            style={{ width: "300px", height: "400px" }}
            className="kv"
            src={hall}
            alt=""
          />
          <p className="textkv">
            Зал — большое, обычно парадное помещение в доме, предназначенное для
            приёма гостей, развлечений и т. п.
          </p>
        </div>
        <div className="aboutCard">
          <img
            style={{ width: "300px", height: "400px" }}
            className="kv"
            src={hallway}
            alt=""
          />
          <p className="textkv">
            Прихожая — часть жилого помещения (квартиры, частного дома),
            располагающаяся сразу за входом в него
          </p>
        </div>
        <div className="aboutCard">
          <img
            style={{ width: "300px", height: "400px" }}
            className="kv"
            src={canuzel}
            alt=""
          />
          <p className="textkv">
            Санузел — буквально место для санитарных и гигиенических процедур.
            Обычно под санузлом понимается помещение, где человек может справить
            свои естественные физиологические потребности и привести себя в
            порядок.
          </p>
        </div>
      </div>
      <h3 className="partnerAbout">Наши партнеры</h3>
      <div className="partner">
        <div>
          <a href="https://emakom.kg/">
            <img
              className="logoAbout"
              src="https://emakom.kg/wp-content/uploads/2020/08/logoEmakom-1.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://ihlas.kg/">
            <img
              className="logoAbout"
              src="https://ihlas.kg/static/images/logo-black.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="http://kg-group.kg/">
            <img
              className="logoAbout"
              src="http://kg-group.kg/static/img/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="https://avangardstyle.kg/">
            <img className="logoAbout" src={avangard} alt="" />
          </a>
        </div>
        <div>
          <a href="https://elitehouse.kg/">
            <img className="logoAbout" src={elitehous} alt="" />
          </a>
        </div>
        <div>
          <a href="https://emark-stroy.kg/">
            <img className="logoAbout" src={emark} alt="" />
          </a>
        </div>
        <div>
          <a href="https://elitka.kg/builder/family-village">
            <img
              className="logoAbout"
              src="https://elitka.kg/images/builder/618967200455b_618967200409f.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="video">
        <video
          width="100%"
          height="600px"
          controls="loop"
          poster="video/duel.jpg"
          autoPlay
          loop
          muted
        >
          <source
            src="https://player.vimeo.com/external/501275358.sd.mp4?s=30a52049f69e86b6ef149996b4ee701ef50abe9a&profile_id=164"
            type="video/mp4"
          />
        </video>
      </div>
      <hr />
      <div className="map">
        <h4>Наш адрес</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5880.476514297016!2d74.59062015568651!3d42.87054836762043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681291863710!5m2!1sru!2skg"
          width="100%"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
