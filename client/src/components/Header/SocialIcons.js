import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import '../Header.scss'

export default function SocialIcons() {
    return (
        <div className = "header__icons">
            <SocialIcon
            url = "https://github.com/AlinaShahmur"
            target = "_blank" 
            style = {{height: 30, width: 30, marginRight: 15}}>     
            </SocialIcon>
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
        </div>
    )
}