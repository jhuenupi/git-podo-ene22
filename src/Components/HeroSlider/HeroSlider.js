import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// images
import image1 from '../../images/Slide/banner1.jpg';
import image2 from '../../images/Slide/banner2.jpg';
import image3 from '../../images/Slide/banner3.jpg';
import image4 from '../../images/Slide/banner4.jpg';
import image5 from '../../images/Slide/banner5.jpg';
import image6 from '../../images/Slide/banner6.jpg';
import image7 from '../../images/Slide/banner7.jpg';
// Import Swiper styles
import '../../../node_modules/swiper/swiper.min.css'
import "../../../node_modules/swiper/components/pagination/pagination.min.css"
import "../../../node_modules/swiper/components/navigation/navigation.min.css"

import "./HeroSlider.css";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const HeroSlider = () => {
    
        return (
<>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide>
    <img src={image1} alt="image1"></img>
  </SwiperSlide>
  <SwiperSlide>
    <img src={image2} alt="image2"></img>
  </SwiperSlide>
  <SwiperSlide>
    <img src={image3} alt="image3"></img>
  </SwiperSlide> 
  <SwiperSlide>
    <img src={image4} alt="image4"></img>
  </SwiperSlide>    
  <SwiperSlide>
    <img src={image5} alt="image5"></img>
  </SwiperSlide>   
  <SwiperSlide>
    <img src={image6} alt="image6"></img>
  </SwiperSlide>       
  <SwiperSlide>
    <img src={image7} alt="image7"></img>
  </SwiperSlide>         
  </Swiper>
    </>
        )
    }
export default HeroSlider;
