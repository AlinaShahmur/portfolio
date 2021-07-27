import React from "react";
import Skill from "./Skill";
import Card from "../UI/Card";
import './About.scss'
import { useTranslation } from "react-i18next";

export default function ProgressDiagram(props) {
    const { t } = useTranslation()

    return (

            <Card>
                <div className = "hard-skills">
                    <h1 className = 'title-h3'>{t('hard_skills')}</h1>
                        {props.skills.map(item => <Skill key = {item.id} 
                                                    skill = {item.skill}
                                                    />)}
                </div>
            </Card>


    )
}