import React, { useState } from 'react';
import './Header.scss'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar(props) {

    const { t } = useTranslation()
    const [isGreater, setIsGreater] = useState(window.matchMedia("(max-width: 769px)").matches);
    const handleResize = () => {
        setIsGreater(window.matchMedia("(max-width: 769px)").matches);
    }
    window.addEventListener('resize', handleResize)
    return( 
        <div style = {{display: !isGreater ? 'flex' : props.isVisible ? 'flex' : 'none'}} className = "header__navbar">
            <NavLink activeClassName = "active-link" className = "header__link" to = "/about">
              {t('about')}
            </NavLink>

            <NavLink activeClassName = "active-link" className = "header__link" to = "/portfolio">
            {t('portfolio')} 
            </NavLink>

            <NavLink activeClassName = "active-link" className = "header__link" to = "/contact">
            {t('contact')}
            </NavLink>

        </div>

    )
}