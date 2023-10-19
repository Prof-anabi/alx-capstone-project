import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import '../index.css';


const Navbar = () => {
    //const DarkModeIcon = "bx bx-moon"
    //const LightModeIcon = "bx bx-sun"
    const MenuIcon = "bx bx-menu";

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
        }else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <header className={color ? classes.HeaderBg : classes.Header}>
            <Link className={classes.Title} to="/"><code>&#60;</code>anabi-asah/<code>&#62;</code></Link>
            <nav className={menuOpen ? classes.NavbarOpen : classes.Navbar} onClick={() => {setMenuOpen(!menuOpen)}}>
                <ul className={menuOpen ? classes.Open : ""}>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/testimonials">Testimonials</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                
            </nav>
            
            <div  className={[`${MenuIcon}`, classes.Menu].join(' ')}  onClick={() => {setMenuOpen(!menuOpen)}}></div>
        </header>
        //<div className={[`${DarkModeIcon}`, classes.DarkMode].join(' ')} ></div>
    )
}

export default Navbar;

