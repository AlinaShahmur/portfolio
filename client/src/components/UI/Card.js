import React from 'react';
import './Card.scss'

export default function Card(props) {
    return (
    <div className = "card-wrapper">
        {props.children}
    </div> 
    )
}