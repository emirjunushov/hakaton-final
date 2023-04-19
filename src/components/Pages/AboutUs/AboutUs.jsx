import React from "react";
import "../AboutUs/AboutUs.css";
import avangard from "../../../IMAGES/imgAboutUs/Avangardlogo.png";
import elitehous from "../../../IMAGES/imgAboutUs/EH_logo_w.png";
import emark from "../../../IMAGES/imgAboutUs/logovEmark.png";

// =============
import { motion } from "framer-motion";

const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: 0.2,
  },
};
// =============

const AboutUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      style={{ overflow: "hidden" }}
      className="aboutUs"
    >
      <motion.h2 variants={blockAnimation} castom={1}>
        Квартира
      </motion.h2>
      <motion.p variants={blockAnimation} castom={2}>
        {" "}
        один из видов жилого помещения, состоящий из одной или нескольких
        смежных комнат, в некоторых случаях с отдельным наружным выходом,
        составляющее отдельную часть дома.
        <br /> Ваш дом — это место семейного очага.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        style={{ overflow: "hidden" }}
        className="auCards"
      >
        <motion.div variants={blockAnimation} className="aboutCard">
          <img
            style={{ width: "300px", height: "400px", objectFit: "cover" }}
            src="http://st-0.akipress.org/127//.storage/limon2/images/june2015/.thumbs/271834fdea0538ac146b659a78faa1ef_500_0_0.jpg"
            alt=""
          />
          <div className="textkv">
            <p>
              Кухня — это сердце и душа любого дома и оно предназначено для
              приготовления еды для семьи и гостей
            </p>
          </div>
        </motion.div>
        <motion.div variants={blockAnimation} className="aboutCard">
          <img
            style={{ width: "300px", height: "400px", objectFit: "cover" }}
            className="kv"
            src="http://st-0.akipress.org/127//.storage/limon2/images/june2015/.thumbs/93064ee0bbf5432aabb4dd32ac28cee3_0_500_0.jpg"
            alt=""
          />
          <p className="textkv">
            Спальня — комната в жилище, место в помещении (доме, квартире и так
            далее) для сна и отдыха.
          </p>
        </motion.div>
        <motion.div variants={blockAnimation} className="aboutCard">
          <img
            style={{ width: "300px", height: "400px", objectFit: "cover" }}
            className="kv"
            src="https://kubaaika.ucoz.com/_ph/7/2/999541061.jpg"
            alt=""
          />
          <p className="textkv">
            Зал — большое, обычно парадное помещение в доме, предназначенное для
            приёма гостей, развлечений и т. п.
          </p>
        </motion.div>
        <motion.div variants={blockAnimation} className="aboutCard">
          <img
            style={{ width: "300px", height: "400px", objectFit: "cover" }}
            className="kv"
            src="https://sun9-64.userapi.com/impf/EByp7WZAOAM7clthA6xHt_nb9yXqM6TiMZT9yA/BKy7DZv_EdU.jpg?size=604x431&quality=96&sign=161706f86a4de42d27f5589c35a99a0c&type=album"
            alt=""
          />
          <p className="textkv">
            Прихожая — часть жилого помещения (квартиры, частного дома),
            располагающаяся сразу за входом в него
          </p>
        </motion.div>
        <motion.div variants={blockAnimation} className="aboutCard">
          <img
            style={{ width: "300px", height: "400px", objectFit: "cover" }}
            className="kv"
            src="https://www.topdom.ru/uploaded/article/red-bathroom-interior/24.jpg"
            alt=""
          />
          <p className="textkv">
            Санузел — буквально место для санитарных и гигиенических процедур.
            Обычно под санузлом понимается помещение, где человек может справить
            свои естественные физиологические потребности и привести себя в
            порядок.
          </p>
        </motion.div>
      </motion.div>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        style={{ overflow: "hidden" }}
        variants={blockAnimation}
        className="partnerAbout"
      >
        Наши партнеры
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        style={{ overflow: "hidden" }}
        variants={blockAnimation}
        className="partner"
      >
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
      </motion.div>
      <div className="video">
        <video
          width="100%"
          height="600px"
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
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          style={{ overflow: "hidden" }}
          variants={blockAnimation}
        >
          Наш адрес
        </motion.h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5880.476514297016!2d74.59062015568651!3d42.87054836762043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681291863710!5m2!1sru!2skg"
          width="100%"
          height="500"
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default AboutUs;
