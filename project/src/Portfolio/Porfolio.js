import React from 'react';
import classes from './Portfolio.module.css';

import '../index.css'

const Projects = (props) => {
    const PortfolioCard = props.data.PortfolioArray.map((item) => {
        
        return (
            <div key={item.id} className={classes.PortfolioBox}>
                <img src={item.image} alt="Project images"/>

                <div className={classes.PortfolioLayer}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <a href={item.link}><i className={item.linkIcon}></i></a>
                </div>
            </div>
        )
    });
    return (
        <div className={classes.Portfolio} >
            <h2>Latest <span>Projects</span></h2>

            <div className={classes.PortfolioContainer}>
                {PortfolioCard}
            </div>
        </div>
    )
}

export default Projects;
