import React from "react";
import { Link } from "react-router-dom";
import '../../App.scss'
import './Home.scss'
export default function Home() {   
    return (
        <section className = "section">
            <div className = "main"> 
                <h1 className = 'title-h2'>Alina Shahmurov</h1>
                <h2 className = 'title-h2'>Full Stack Web developer</h2>
                <Link className = 'home-link' to = "/about">Start</Link>
            </div>
        </section>
    )
}
