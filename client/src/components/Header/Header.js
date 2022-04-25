import React, { useState } from "react";
import '../../App.scss';
import './Header.scss'
import Logo from "./Logo";
import  Toggler  from "./Toggler";
import Navbar from "./Navbar";
import Lang from "./Lang";
import SocialIcons from "./SocialIcons";


export default function Header() {
    const languages = [{code: 'en', name: 'English', country_code: 'gb'},
                        {code: 'he', name: 'עברית',country_code: 'il', dir:'rtl'}]
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
            <header className = "header">
                <Logo />
                <Toggler onToggle = {toggleMenu} />         
                <Navbar isVisible = {isOpen}/>
                <Lang langs = {languages}/>
                <SocialIcons/>
            </header>
    )
}


