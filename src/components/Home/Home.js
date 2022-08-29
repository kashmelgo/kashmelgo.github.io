import React, { Component } from 'react'
import {FaReact, FaBootstrap, FaLaravel, FaJava, FaVuejs, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiMysql, SiFlutter, SiDart} from 'react-icons/si';
 
export default class Home extends Component {
  render() {
    return (
        <div className='my-5 p-5 about-container container'>
            <div className="row">
                <div className="col">
                    <div className='d-flex justify-content-start'>
                        <h1> Hello! I'm Kashmel Go</h1>
                    </div>
                    <div className='container-fluid'>
                        <div className='d-flex justify-content-start mt-5'>
                            <p> I'm currently a BS Computer Science student from the University of San Carlos. I make my projects with grit and passion. From the projects I've made with collaborators, I have learned to
                                become a team-player.
                            </p>
                        </div> 
                    </div>
                </div>
                <div className="col">
                    <div className="form-control mx-4 w-25 bg-light">
                        <h4 className='text-dark'> Tech Stack </h4>
                    </div> 
                    <div className="d-flex flex-wrap justify-content-between px-4 py-3">
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <FaReact id='techStackChild' size={70}color='#5CCFEE'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <FaBootstrap id='techStackChild' size={70}color='#7D11F0'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <SiTailwindcss id='techStackChild' size={70}color='#15b4c1'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <FaLaravel id='techStackChild' size={70}color='#f22517'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <SiMysql id='techStackChild' size={70}color='black'/>     
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between px-4 py-3">
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <FaJava id='techStackChild' size={70}color='black'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <FaPython id='techStackChild' size={70}color='black'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <FaVuejs id='techStackChild' size={70}color='#3eaf7c'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <SiFlutter id='techStackChild' size={70}color='#50bbeb'/>     
                        </div>
                        <div className='techStack bg-light rounded m-0 p-3'>
                            <SiDart id='techStackChild' size={70}color='#2aaee9'/>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
