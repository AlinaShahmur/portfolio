import React from 'react';
import Card from '../UI/Card';
import SoftSkill from './SoftSkill';
import './SoftSkills.scss'
import { useTranslation } from "react-i18next";

export default function SoftSkills(props) {
    const { t } = useTranslation()
    return (

            <Card>
                <div className = 'soft-skills'>
                    <h1 className = 'title-h3'>{t('soft_skills')}</h1>
                    {props.skills.map(item => <SoftSkill key = {item.id} skill = {item.skill} /> )}   
                </div>
            </Card>

    )
}