import React from "react";
import '../App.scss';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (

            <header className = "header">
                    <div className = "header__logo">
                        <NavLink className ="header__link" to = "/" exact>
                            Alina Shahmurov
                        </NavLink>
                    </div>

                    <div className = "header__navbar">

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

                    <div className = "header__icons">
                        <SocialIcon
                         url = "https://www.linkedin.com/in/alina-shahmurov/"
                         target = "_blank" 
                         style = {{height: 30, width: 30, marginRight: 15}}>     
                         </SocialIcon>
                        <SocialIcon 
                        url = "https://www.facebook.com/profile.php?id=100007754797490" 
                        target = "_blank"
                         style = {{height: 30, width: 30, marginRight: 15}}>
                         </SocialIcon>
                        <SocialIcon
                         url = "https://www.instagram.com/alinashahmur/" 
                         target = "_blank" 
                         style = {{height: 30, width: 30, marginRight: 15}}>
                         </SocialIcon>
                    </div>
            </header>
    )
}