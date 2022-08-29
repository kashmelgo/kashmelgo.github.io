import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import { Row } from "react-bootstrap";


export default function Projects(props){

    const projectInfo = [
        {link: "https://github.com/kashmelgo/Tick", image: "https://user-images.githubusercontent.com/55750939/187132284-76f5af94-11bc-455d-b6e1-69735a9df4c5.png", title: "Tick", text: "Tick is a gamified to-do-list web application where you can earn points from finishing tasks and purchasing themes with the earned points. Tick uses only Laravel as its backend framework. I was mainly in charge of the backend of the web application."},
        {link: "https://github.com/kashmelgo/stubu", image: "https://user-images.githubusercontent.com/55750939/187134848-ca9d99ad-703a-40ef-9ba6-9ac355c954e9.png", title: "Stubu", text: "Inspired by knowledge-sharing websites such as Stackoverflow, Stubu is an app where students are able to ask questions regarding a certain topic. This uses Laravel as its framework. I was in charge of the Notification module, and most of the back-end of the web applications."},
        {link: "https://github.com/kremarie00/MobileDev_Midterms", image: "https://user-images.githubusercontent.com/55750939/187133758-faf06a42-9567-426a-b995-b631493e04af.png", title: "Genshin Impact Fanmade Mobile App", text: "This mobile app was created as a practice for mobile development. This app uses Flutter. I was in charge of the dashboard screen and the API fetches."},
        {link: "https://github.com/kashmelgo/timbertrack-appdev", image: "https://i.imgur.com/vPv80hg.png", title: "Timbertrack", text: "Timbertrack is an inventory and POS system to Tony's Lumber and Construction Supply. The system uses Laravel and ReactJS. The system  I was in charge of the Task module of the system."},
    ]

    return (
        <div className='my-5 p-5 project-container container'>
            <section className="page-section d-flex " id="approval">
                <div className="container">
                {/* reading the props */}
                    <Row xs={1} md={2} className="g-4">
                        {projectInfo.map((projectInfo, index) => {
                        return <ProjectCard {...projectInfo} key={index} />;
                        })}
                    </Row>
                </div>
            </section>
        </div>
    )

}
