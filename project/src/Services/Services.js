import React from 'react';
import classes from './Services.module.css';
import '../index.css';

const Services = (props) => {
    const ServicesCard = props.data.ServicesArray.map((item) => {
        
        return (
            <div key={item.id} className={classes.ServicesBox}>
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.link} className={classes.Btn}>{item.buttonValue}</a>
            </div>
        )
        });



    return (
        <div className={classes.Services}>
        <h2>My <span>Services</span></h2>

        <div className={classes.ServicesContainer}>
           {ServicesCard}
        </div>
    </div>
    )
}

export default Services;