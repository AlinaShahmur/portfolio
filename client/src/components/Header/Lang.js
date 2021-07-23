import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import './Header.scss'
import 'flag-icon-css/css/flag-icon.min.css';
import cookies from 'js-cookie'

export default function Lang(props) {
    const [isDropdownShown, setIsDropdownShown] = useState(false)
    let menuClasses = isDropdownShown ? 'dropdown-menu active' : 'dropdown-menu';

    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = props.langs.find(item => item.code === currentLanguageCode)

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
        document.documentElement.lang = currentLanguage.code;
    },[currentLanguage])

    const chooseLangHandler = (code) => {
        setIsDropdownShown(false);
        i18next.changeLanguage(code);
       
    }

    return (
    <div className="dropdown">   
        <button onClick = {() => setIsDropdownShown(!isDropdownShown)} className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             <span className = {`flag-icon flag-icon-${(props.langs.find(item => item.code === currentLanguageCode)).country_code}`}></span>
        </button>
        <ul className = {menuClasses} aria-labelledby="dropdownMenuButton1">

           {props.langs.map(item => <li key = {item.code} ><button onClick = {() => chooseLangHandler(item.code)} className="dropdown-item">{item.name}</button></li>)} 
          
        </ul>
    </div>
    )
}