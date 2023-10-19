import React from 'react';
import classes from './Home.module.css'
import homeImage from '../Assets/header-img.png';
import Typewriter from 'typewriter-effect'
import '../index.css';

const Home = () => {
    
    
    return (
        <div className={classes.Home}>
            <div className={classes.HomeContent}>
                <h3>Howdy! I am</h3>
                <h1>Anabi Asah</h1>
                <p>A skilled full-stack Software Engineer with a passion for crafting outstanding digital solutions. I design simple, visually captivating, user-friendly, interactive and responsive web applications for individuals and corporate organizations. I bring creativity and technical expertise to every project I build.</p>

                <div className={classes.SocialMedia}>
                    <a href="https://www.facebook.com/anabi.asah" ><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.twitter.com/anabi_asah" ><i className="bx bxl-twitter"></i></a>
                    <a href="https://instagram.com/anabiasah" ><i className="bx bxl-instagram-alt"></i></a>
                    <a href="https://www.linkedin.com/in/anabi-asah" ><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/prof-anabi" ><i className="bx bxl-github"></i></a>
                </div>

                <a href="https://www.biodrop.io/prof-anabi" className={classes.Btn}>Request for CV</a>
            </div>

            <div className={classes.ProfessionContainer}>
                <h1>
                    <Typewriter 
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["Software Developer"]
                        }}
                    />
                </h1>
            </div>
            <div className={classes.HomeImage}>
                <img src={homeImage}  alt="home" />
            </div>
    </div>
    )
}

export default Home;