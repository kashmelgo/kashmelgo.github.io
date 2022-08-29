import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    
    <div className='my-5 p-5 about-container container'>
        <div className='about-parent'>
            <div className='about-details'>
                <div className='colz d-flex justify-content-between'>
                    <Link to="/">
                        <div>
                            <h3 className='aboutName'> Kashmel Galil Go</h3>
                            <h6 className='aboutTitle'> Aspiring Web Developer / BSCS Student</h6>
                        </div>
                    </Link>
                    
                    <div className='d-flex justify-content-between'>
                        <Link to="/projects"><h5 className='col'> Projects </h5></Link>
                        <Link to="/contact"><h5 className='col'> Contact </h5></Link>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <a className='col px-0 py-0' href='https://www.facebook.com/kashmelmgo/'>
                                <FaFacebook color='white' size='22px'/>
                            </a> 
                        </div>
                        <div className='col'>
                            <a className='col px-0 py-0'href='https://www.instagram.com/kashmelgoooo/'>
                                <FaInstagram color='white' size='22px'/>
                            </a> 
                        </div>
                        <div className='col'>
                            <a className='col px-0 py-0'href='https://twitter.com/kashmelgo'>
                                <FaTwitter color='white' size='22px'/>
                            </a> 
                        </div>
                        <div className='col'>
                            <a className='col px-0 py-0'href='https://github.com/kashmelgo'>
                                <FaGithub color='white'size='22px'/>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
