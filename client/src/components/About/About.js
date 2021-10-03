import React from "react";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";
import Story from './Story';
import Image from './Image'
import './About.scss'
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation()
    const hardSkills = [{id: 1, skill: 'HTML'},
                        {id: 2, skill: 'CSS'},
                        {id: 3, skill: 'Java Script'},
                        {id: 4, skill: 'React'},
                        {id: 5, skill: 'NodeJs'},
                        {id: 6, skill: 'MongoDb'},
                        {id: 6, skill: 'Git'}]

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
                <Story/>
                <HardSkills skills = {hardSkills}/> 
                <SoftSkills skills = {softSkills}/>
            </div>
        </section>
    )
}

