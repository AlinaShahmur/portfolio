import React from "react";
import ProgressBar from '../About/ProgressBar'
import Card from "../UI/Card";
import './ProgressDiagram.scss'

export default function ProgressDiagram(props) {
    return (

            <Card>
                <div className = "hard-skills">
                    <h1 className = 'title-h3'>Hard Skills</h1>
                        {props.skills.map(item => <ProgressBar key = {item.id} 
                                                    completed = {item.completed}
                                                    skill = {item.skill}
                                                    />)}
                </div>
            </Card>


    )
}