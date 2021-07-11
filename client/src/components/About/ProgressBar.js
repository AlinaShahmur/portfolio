import React, { useEffect, useState } from 'react';
import './ProgressBar.scss'

export default function ProgressBar(props) {
    const [completed, setCompleted] = useState('0%');
    useEffect(() => {
        setTimeout(() => {
            setCompleted(props.completed)
        }, 1500);
    }, [])
    return (
        <React.Fragment>
            <span className = "progress-bar__title">{props.skill}</span>
            <div className = "progress-bar">
                <div style = {{width: completed}} className = "progress-bar__filler">
                    <span className = "progress-bar__label">{props.completed}</span>
                </div>
            </div>
        </React.Fragment>

    )
}