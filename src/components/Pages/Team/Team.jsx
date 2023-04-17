import React from "react";
import Bekzat from "../../../IMAGES/Bekzat.jpg";
import Emir from "../../../IMAGES/Emir.jpg";
import Vremenno from "../../../IMAGES/Vremenno.jpg";
import "./Team.css";
// =============
import { motion } from "framer-motion";

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

const Team = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      style={{ overflow: "hidden" }}
      className="team__container"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        style={{ overflow: "hidden" }}
        className="team"
      >
        <motion.p
          variants={blockAnimation}
          castom={1}
          className="team__poragraphs"
          id="team__poragraphs"
        >
          Проект на full stack хакатон
        </motion.p>
        <motion.p
          variants={blockAnimation}
          castom={2}
          className="team__poragraphs"
        >
          Название команды "BATIR"
        </motion.p>
        <motion.p
          variants={blockAnimation}
          castom={3}
          className="team__poragraphs"
        >
          Участники
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          style={{ overflow: "hidden" }}
          variants={blockAnimation}
          className="team__cards"
        >
          <motion.div className="team_item">
            <img className="item__img" src={Vremenno} alt="" />
            <p className="item_paragraph">
              <a href=""> Адилхан</a>{" "}
              <span className="paragraph_span">frontend</span>
            </p>
          </motion.div>
          <motion.div className="team_item">
            <img className="item__img" src={Emir} alt="" />
            <p className="item_paragraph">
              <a href="https://www.instagram.com/ejunushov/" target="_blanck">
                {" "}
                Эмир
              </a>{" "}
              <span className="paragraph_span">frontend</span>
            </p>
          </motion.div>
          <motion.div className="team_item">
            <img className="item__img" src={Bekzat} alt="" />
            <p className="item_paragraph">
              <a href="https://www.instagram.com/bekzat_os/" target="_blanck">
                {" "}
                Бекзат{" "}
              </a>
              <span className="paragraph_span">frontend</span>
            </p>
          </motion.div>
          <motion.div className="team_item">
            <img className="item__img" src={Vremenno} alt="" />
            <p className="item_paragraph">
              <a href=""> Максат </a>
              <span className="paragraph_span">frontend</span>
            </p>
          </motion.div>
          <motion.div className="team_item">
            <img className="item__img" src={Vremenno} alt="" />
            <p className="item_paragraph">
              <a href=""> Ясин</a>{" "}
              <span className="paragraph_span">frontend</span>
            </p>
          </motion.div>
          <motion.div className="team_item">
            <img className="item__img" src={Vremenno} alt="" />
            <p className="item_paragraph">
              <a href=""> Валентин</a>{" "}
              <span className="paragraph_span">backend</span>
            </p>
          </motion.div>
          <motion.div className="team_item">
            <img className="item__img" src={Vremenno} alt="" />
            <p className="item_paragraph">
              <a href=""> ???</a>{" "}
              <span className="paragraph_span">backend</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Team;
