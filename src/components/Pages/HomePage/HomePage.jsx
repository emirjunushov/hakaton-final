import React from "react";
import SliderList from "./Slider/SliderList";
import SearchBar from "../../searchBar/SearchBar";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
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
