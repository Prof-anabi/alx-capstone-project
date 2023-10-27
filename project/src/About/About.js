import React from 'react';
import classes from './About.module.css';
import aboutimage from '../Assets/about-image.png'

import '../index.css';

const About = () => {
    return (
        <div className={classes.About}>
            <div className={classes.AboutImage}>
            <img src={aboutimage} alt="Anabi Asah" />
            </div>
            
            <div className={classes.AboutContent}>
                <h2 >About <span>Me</span></h2>
                <h3>Hi, I'm Here To Help Your Next Project!</h3>
                <p>I am a full - stack Software Developer from Ghana. My passion lies in developing innovative software solutions that combine my love of technology and my natural ability to solve problems. I have experience in building visually appealing, user-friendly and interactive web applications. I believe that literacy in technology is a basic human right and it's part of my mission to equip students and young adults in my nation and the world at large with the knowledge and tools they require to thrive and keep at pace in today's technologically advancing world. I would love to connect with you. Click the button below and connect with me. </p>
                <a href="https://www.biodrop.io/prof-anabi" className={classes.Btn}>Let's connect</a>
            </div>
        </div>
    )
};

export default About;