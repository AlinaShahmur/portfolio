import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from "../UI/Card";
import './About.scss'

export default function Story() {
    const {t} = useTranslation();
    return (
        <Card>
            <div className="story">
                <p>{t('my_story')}</p>
            </div>
        </Card>


    )
}