import React, {useState, useEffect} from "react";
import './Portfolio.scss';
import { useTranslation } from "react-i18next";

export default function Project() {
    const { t } = useTranslation()
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/api/projects')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(data => setProjects(data))
        .catch(e => console.log(e))
    },[])

    return (
        <section className = "section">
        <div className = "projects">
            <h1 className = "title-h1">{t('my_projects')}</h1>
            <div className = "projects__container">
                {projects.map((project, index) =>( 
                    <div className = "projects__item" key = {index}>
                                <div className = 'screen-project'>
                                    <div className = 'screen-project__frontside'>
                                        <img src = {project.img} alt = 'project screen'></img>
                                    </div>   
                                    <div className = 'screen-project__backside'>
                                            <a href = {project.url} key = {index} target = "_blank" rel="noreferrer"><h3>{project.name}</h3></a>
                                            <div className = 'technologies'>
                                                {project.technologies.map((item, index) => <div key = {index} className = 'technologies__item'>{item}</div>)} 
                                            </div>                   
                                            <p>{project.description}</p>   
                                            <a href = {project.github} target = "_blank" rel="noreferrer">GitHub repository</a>   
                                    </div>                                    
                                </div>                                                                

                        
                    </div>
                ))} 
            </div>  
        </div>        
        </section>
    )
}
