import React, {useState, useEffect} from "react";
import './Portfolio.scss';
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router";

 function Project(props) {
    const { t } = useTranslation()
    const [projects, setProjects] = useState([]);
    const [isH1Visible, setIsH1Visible] = useState(false)
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
    props.history.listen(() => {
      setIsH1Visible(false)
      setTimeout(() => {
        setIsH1Visible(true)
      },500)
    })
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsH1Visible(true)
      },500)
      return () => {
        clearTimeout(timer)
      }
    },[])
    const titleH1Classes = isH1Visible ? "title-h1 visible" : "title-h1"
    return (
        <section className = "section">
        <div className = "projects">
            <h1 className = {titleH1Classes}>{t('my_projects')}</h1>
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

export default withRouter(Project)
