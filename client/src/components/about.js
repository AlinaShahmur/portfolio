import React from "react";
import ProgressDiagram from "./About/ProgressDiagram";
import SoftSkills from "./About/SoftSkills";
import Story from './About/Story';
import Card from './UI/Card'
import Image from './About/Image'
import './About.scss'

export default function About() {
    const hardSkills = [{id: 1, skill: 'HTML', completed: '70%'},
                        {id: 2, skill: 'CSS', completed: '70%'},
                        {id: 3, skill: 'Java Script', completed: '60%'},
                        {id: 4, skill: 'React', completed: '50%'},
                        {id: 5, skill: 'Angular', completed: '50%'}]

    const softSkills = [{id: 1, skill: 'Self-learning ability'},
                        {id: 2, skill: 'Problem-solving skills'},
                        {id: 3, skill: 'Result-oriented'},
                        {id: 4, skill: 'Analytical skills'},
                        {id: 5, skill: 'Attention to details'}]
    return (
        <section className = "section">
            <h1 className = "title-h1">About Me</h1>
            <div className = 'about'>
                <Image/>
                <Story/>
                <ProgressDiagram skills = {hardSkills}/> 
                <SoftSkills skills = {softSkills}/>
            </div>
        </section>
    )
}

