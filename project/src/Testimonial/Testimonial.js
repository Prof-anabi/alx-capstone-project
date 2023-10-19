import React from "react";
import classes from './Testimonial.module.css';
import '../index.css';
import Slider from '../Swiper'




const Testimonial = () => {
    // const TestimonialCard = props.data.TestimonialArray.map((item) => {
        
    //     return (
    //         <div key={item.id} className={classes.TestimonialSlide}>
    //             <img src={item.image} alt="Person"/>
    //             <h3>{item.name}</h3>
    //             <p>{item.text}</p>
    //         </div>
    //     )
    //     });
    return (
        <div className={classes.TestimonialContainer}>
        <h2>Valuable <span>Testimonials</span></h2>
        
        <div className={classes.TestimonialWrapper}>
            <div className={classes.TestimonialBox}>
                <div className={classes.TestimonialContent}>
                  <Slider />
                </div>
            </div>
        </div>
    </div>
    )
  };


export default Testimonial;