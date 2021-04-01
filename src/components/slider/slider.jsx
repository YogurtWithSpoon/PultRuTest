import React from 'react'
import "swiper/swiper-bundle.min.css";
import "./bullets.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Autoplay]);

function CustomSlider({children}) {
  return (
    <Swiper
        slidesPerView={1}
        loop={true}
        style={{ paddingBottom: 3.125 + "rem" }}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '"></span>';
          },
        }}
      >
        {children.map((item,index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>
        })}
        <div className="swiper-pagination"></div>
      </Swiper>
  )
}

export default CustomSlider
