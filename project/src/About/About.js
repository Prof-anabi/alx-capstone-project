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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptates molestiae odit, unde numquam eveniet, voluptatem corrupti maiores repellat possimus temporibus aliquam assumenda quod omnis ipsam ipsa corporis, labore deleniti voluptatum accusamus eligendi ea necessitatibus? Architecto numquam et minus at esse repudiandae velit, laudantium eaque repellat ab voluptates reprehenderit aliquam delectus hic deserunt dignissimos labore. Atque molestias facere ipsam labore ea adipisci delectus! Nobis, esse? Ad dolorem sapiente, culpa aliquid, debitis unde labore autem nostrum qui corrupti tempore dolorum odit doloremque nihil ut dignissimos itaque porro architecto aperiam impedit esse non expedita. Cum fugiat voluptatum harum illum delectus nam vitae!</p>
                <a href="https://www.biodrop.io/prof-anabi" className={classes.Btn}>Let's connect</a>
            </div>
        </div>
    )
};

export default About;