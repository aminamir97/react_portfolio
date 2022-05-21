import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css/skyblue";
import Image from "next/image";
import flutter from "../../assets/kabbash.png";
import newsi from "../../assets/newsi.jpg";

export const Slider = (propsImages) => {
  const slides = propsImages.items;
  return (
    <Splide>
     {slides.map(  (img)=>{
       return (
        <SplideSlide key={"22"}>
        <div className="sliderdev">
          <img src={img} className="imgslider" />
        </div>
      </SplideSlide>
       );
     } )}
      {/* <SplideSlide key={"21"}>
        <div className="sliderdev">
          <img src={flutter.src} className="imgslider" />
        </div>
      </SplideSlide>
      <SplideSlide key={"11"}>
        <div className="sliderdev">
          <img src={newsi.src} className="imgslider" />
        </div>
      </SplideSlide>
      <SplideSlide key={"33"}>
        <div className="sliderdev">
          <img src={flutter.src} className="imgslider" />
        </div>
      </SplideSlide> */}
    </Splide>
  );
};
