import React, { useState } from 'react';
import Card from '../UI/Card';
import SoftSkill from './SoftSkill';
import './SoftSkills.scss'

export default function SoftSkills(props) {
    return (

            <Card>
                <div className = 'soft-skills'>
                    <h1 className = 'title-h3'>Soft Skills</h1>
                    {props.skills.map(item => <SoftSkill key = {item.id} skill = {item.skill} /> )}   
                </div>
            </Card>

    )
}