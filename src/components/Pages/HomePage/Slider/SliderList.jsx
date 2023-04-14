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

export default function SliderList() {
  return (
    <>
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
        <SwiperSlide>
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/761273577/rendition/720p/file.mp4?loc=external&oauth2_token_id=1027659527&signature=719fcf0eb8e1dd8c7cc39d6cf9771834d97040eea403eef1e2f4f6f4133a6559"
            width="100%"
            height="600px"
            poster="video/duel.jpg"
            autoPlay
            loop
            muted
          ></video>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
