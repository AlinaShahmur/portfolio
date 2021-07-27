import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';


export default function Logo() {
    return <Link to = "/" className = "header__logo">Alina Shahmurov</Link>    
}