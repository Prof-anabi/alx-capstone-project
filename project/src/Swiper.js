import React from "react";
import classes from './Testimonial/Testimonial.module.css';
import './index.css';
import Data from "./Data";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  const TestimonialCard = Data.TestimonialArray.map((item) => {
        
    return (
        <div key={item.id} className={classes.TestimonialSlide}>
            <img src={item.image} alt="Person"/>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
        </div>
    )
    });
    return (
        <Swiper 
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            {TestimonialCard}
            
          </SwiperSlide>
          
          
        </Swiper>
      );
}

export default Slider;