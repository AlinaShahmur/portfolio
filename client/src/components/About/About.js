import React from "react";
import ProgressDiagram from "./ProgressDiagram";
import SoftSkills from "./SoftSkills";
import Story from './Story';
import Image from './Image'
import './About.scss'
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation()
    const hardSkills = [{id: 1, skill: 'HTML', completed: '70%'},
                        {id: 2, skill: 'CSS', completed: '70%'},
                        {id: 3, skill: 'Java Script', completed: '60%'},
                        {id: 4, skill: 'React', completed: '50%'},
                        {id: 5, skill: 'Angular', completed: '50%'}]

    const softSkills = [{id: 1, skill: t('self_learning_ability')},
                        {id: 2, skill: t('problem_solving_skills')},
                        {id: 3, skill: t('result_oriented')},
                        {id: 4, skill: t('analytical_skills')},
                        {id: 5, skill: t('attention_to_details')}]
    return (
        <section className = "section">
            <h1 className = "title-h1">{t('about_me')}</h1>
            <div className = 'about'>
                <Image/>
                <ProgressDiagram skills = {hardSkills}/> 
                <Story/>
                <SoftSkills skills = {softSkills}/>
            </div>
        </section>
    )
}

