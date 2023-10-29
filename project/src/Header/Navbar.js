import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import '../index.css';


const Navbar = () => {
    const DarkModeIcon = "bx bx-moon"
    const LightModeIcon = "bx bx-sun"
    const MenuIcon = "bx bx-menu";

    //Sticky Navbar on Scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 30) {
            setColor(true)
        }else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    //Menu and Navbar Toggling
    const [menuOpen, setMenuOpen] = useState(false)

    //DarkMode - LightMode Toggle
    // const [darktheme, setDarkTheme] = useState(false)
    // const setDarkMode = () => {
    //     document.querySelector('body').setAttribute('data-theme', 'dark');
    //     localStorage.setItem("selectedTheme", 'dark');

    // }
    // const setLightMode = () => {
    //     document.querySelector('body').setAttribute('data-theme', 'light')
    //     localStorage.setItem("selectedTheme", 'light');
    // }

    // const selectedTheme = localStorage.getItem('selectedTheme');

    // if (selectedTheme === 'dark') {
    //     setDarkMode();
    // }

    // const toggleTheme = () => {
    //     if(darktheme) setDarkMode();
    //     else setLightMode();
    // }
    
    return (
        <header className={color ? classes.HeaderBg : classes.Header}>
            <Link className={darktheme ? classes.Title : classes.TitleDark} to="/"><code>&#60;</code>anabi-asah/<code>&#62;</code></Link>
            <nav className={menuOpen ? classes.Navbar : classes.NavbarOpen} onClick={() => {setMenuOpen(!menuOpen)}}>
                <ul className={menuOpen ? classes.Open : ""}>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li> <NavLink to="/testimonials">Testimonials</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className={[classes.ModeIcon, darktheme ? DarkModeIcon : LightModeIcon].join(' ')} onClick={() => {setDarkTheme(!darktheme); toggleTheme()}} defaultChecked={selectedTheme === "light"}></div>
            <div  className={[`${MenuIcon}`, classes.Menu].join(' ')}  onClick={() => {setMenuOpen(!menuOpen)}}></div>
        </header>
    )
}

export default Navbar;

