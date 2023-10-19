import React from 'react';
import classes from './Footer.module.css';

import '../index.css'

const Footer = () => {
    const Year = new Date().getFullYear()
    return (
        <footer className={classes.Footer}>
        <div className={classes.FooterText}>
            <p>Copyright &copy;  
            { Year } 
            | ALL RIGHTS RESERVED!
            </p>
            <p>Designed with ❤ by ANABI ASAH</p>
        </div>
        <div className={classes.FooterIconTop}>
            <a href="/"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
    </footer>
    )
}

export default Footer;