import React from "react";
import SliderList from "./Slider/SliderList";

const HomePage = () => {
  return (
    <div>
      <SliderList />

      <video
        width="100%"
        src="http://manas.su/video/k1.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default HomePage;
