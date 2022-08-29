import React, { Component } from 'react'
import {FaGithub} from 'react-icons/fa';
import { Card, Row, Col } from "react-bootstrap";
export default function ProjectCard(props){
    return (
                <Card style={{width: "36rem"}} className= "m-3 p-4" bg="dark">
                    <a className='col px-0 py-0'href={props.link}>
                        <Card.Img variant="top" src={props.image} />
                    </a>
                    
                        <Card.Body>
                            
                            <a className='col px-0 py-0'href={props.link}>
                              <FaGithub color='white'size='22px'/>
                            </a>
                            <Card.Title >{props.title}</Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Card.Body>
                </Card>
    )
}
