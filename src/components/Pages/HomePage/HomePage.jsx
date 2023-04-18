import React from "react";
import SliderList from "./Slider/SliderList";
import "./HomePage.css";

// =============
import { motion } from "framer-motion";
import ProductList from "../../products/ProductList";

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

const HomePage = () => {
  return (
    <div>
      <SliderList />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        style={{ overflow: "hidden" }}
        className="roditelKochevnuks"
      >
        <video
          className="kochevnik"
          width="100%"
          src="http://manas.su/video/k1.mp4"
          autoPlay
          loop
          muted
        ></video>
        <motion.p
          variants={blockAnimation}
          castom={1}
          className="kochevnikiPargrph"
        >
          „Чтобы развиваться, меняться, расти, учиться, адаптироваться, любить,
          набираться опыта… мы должны быть открыты… Это образ жизни современного
          <a
            href="https://www.youtube.com/watch?v=9KhXCoWQBzI"
            target="_blanck"
            className="some-span"
          >
            {" "}
            кочевника
          </a>
          .“
        </motion.p>
      </motion.div>
      <ProductList />
    </div>
  );
};

export default HomePage;
