import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import '../../App.scss'
import './Home.scss'
function Home(props) {   
    const [isH1Visible, setIsH1Visible] = useState(false)
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
            <div className = "main"> 
                <h1 className = {titleH1Classes}>Alina Shahmurov</h1>
                <h2 className = 'title-h2'>Full Stack Web developer</h2>
                <Link className = 'home-link' to = "/about">Start</Link>
            </div>
        </section>
    )
}

export default withRouter(Home)
