import React, {useState, useEffect} from "react";
import './Portfolio.scss'

export default function Project() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/projects')
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
            <h1 className = "title-h1">My Projects</h1>
            <div className = "projects__container">
                {projects.map((project, index) =>( 
                    <div className = "projects__item" key = {index}>
                        <a href = {project.url} key = {index} target = "_blank">                    
                            <img src = {project.img}></img>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>              
                        </a>
                    </div>
                ))} 
            </div>  
        </div>        
        </section>
    )
}
