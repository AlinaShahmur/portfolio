import React from 'react';
import Card from "../UI/Card";
import './Story.scss'

export default function Story() {
    return (
        <Card>
            <div className="story">
                <h3 className = 'title-h3'>My Story</h3>
                <p>I graduated from Novosibirsk State Technical University. I have a bachelor's degree in Applied computer science in economics.Now I live in Israel. When I moved to Israel I decided that first of all I need to learn the Hebrew language due to feel undependent in the country. After 2 years of my residence in Israel I started to learn Web development independently and when I realized that I would like to develop in this sphere I took the full stack web development frontal course in Technion continuing education. I have built some independent projects and within the course. You can get to know with some of them on my GitHub profile and on my Web site portfolio.</p>
            </div>
        </Card>


    )
}