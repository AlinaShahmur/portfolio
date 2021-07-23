import React from "react";
import ProgressBar from '../About/ProgressBar'
import Card from "../UI/Card";
import './ProgressDiagram.scss'
import { useTranslation } from "react-i18next";

export default function ProgressDiagram(props) {
    const { t } = useTranslation()

    return (

            <Card>
                <div className = "hard-skills">
                    <h1 className = 'title-h3'>{t('hard_skills')}</h1>
                        {props.skills.map(item => <ProgressBar key = {item.id} 
                                                    completed = {item.completed}
                                                    skill = {item.skill}
                                                    />)}
                </div>
            </Card>


    )
}