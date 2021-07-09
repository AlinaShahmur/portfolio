import React, { useState } from 'react';
import { useEffect } from 'react';
import '../Header.scss'
import { NavLink } from "react-router-dom";


export default function Navbar(props) {
    const [isGreater, setIsGreater] = useState(true);
    useEffect(() => {
        setIsGreater(window.matchMedia("(max-width: 769px)").matches)
    })
    const handleResize = () => {
        setIsGreater(window.matchMedia("(max-width: 769px)").matches)
    }
    window.addEventListener('resize', handleResize)
    return( 
        <div style = {{display: !isGreater ? 'flex' : props.isVisible ? 'flex' : 'none'}} className = "header__navbar">
            <NavLink activeClassName = "active-link" className = "header__link" to = "/about">
                About
            </NavLink>

            <NavLink activeClassName = "active-link" className = "header__link" to = "/portfolio">
                Portfolio
            </NavLink>

            <NavLink activeClassName = "active-link" className = "header__link" to = "/contact">
                Contact
            </NavLink>
        </div>

    )
}