import React from 'react';
import Card from '../UI/Card';
import { FaBullseye } from 'react-icons/fa'
import {IconContext} from "react-icons"
import './SoftSkill.scss'
export default function SoftSkill(props) {

    return (
        <div className = 'soft-skill'>
            <IconContext.Provider value ={{style: {color: "#7561AE"}}} >
                <div>
                    <FaBullseye/>
                    <span className = 'soft-skill__label'>{props.skill}</span>
                </div>
            </IconContext.Provider>
        </div>

    )
}