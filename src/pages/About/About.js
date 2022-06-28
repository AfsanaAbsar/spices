import React from 'react';
import './About.css'
import aboutimg from '../../images/about.jpg'
const About = () => {
    return (

        <div className='d-flex align-items-center container'>

            <div className='p-5'>
                <h1>Who We Are</h1>
                <p>We are A multivendor spice supplier company. Here we give opportunities to the spice vendors to update and sell their products.</p>
            </div>
            <div className='p-5'>
                <img className='w-75' src={aboutimg} alt="" />
            </div>


        </div>

    );
};

export default About;