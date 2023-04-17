import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slip from "../../../../IMAGES/slidervideo/Slip.mp4";
import bathroom from "../../../../IMAGES/slidervideo/bathroom.mp4";
import hallway from "../../../../IMAGES/slidervideo/hallway.mp4";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./SliderList.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

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

export default function SliderList() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      style={{ overflow: "hidden" }}
      variants={blockAnimation}
      castom={1}
    >
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            src={slip}
            width="100%"
            height="600px"
            poster="video/duel.jpg"
            autoPlay
            loop
            muted
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            src={bathroom}
            width="100%"
            height="600px"
            poster="video/duel.jpg"
            autoPlay
            loop
            muted
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            src={hallway}
            width="100%"
            height="600px"
            poster="video/duel.jpg"
            autoPlay
            loop
            muted
          ></video>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
