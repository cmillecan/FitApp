import React from 'react';
import './About.css';
import pic from '../about.JPG';

function About() {
    return (
        <div className='about-container'>
            <h1>ABOUT</h1>
            <div className='about-content'>
                <div className='left'>
                    <img className='about-pic' src={pic}  alt='about'/>
                    <div className='name'>Constance Millecan</div>
                </div>
                <div className='right'>
                    What inspired this project
                </div>
            </div>
        </div>
    );
}

export default About;