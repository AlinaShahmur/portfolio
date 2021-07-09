import React, { useState } from "react";
import '../App.scss';
import  Toggler  from "./Header/Toggler";
import './Header.scss'
import Logo from "./Header/Logo";
import Navbar from "./Header/Navbar";
import SocialIcons from "./Header/SocialIcons";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
            <header className = "header">
                <Logo/>
                <Toggler onToggle = {toggleMenu} />         
                <Navbar isVisible = {isOpen}/>
                <SocialIcons/>
            </header>
    )
}


