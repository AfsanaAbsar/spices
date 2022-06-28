import React from 'react';
import './GetInTouch.css'
import getintouch from '../../../images/getintouch.jpg'
const GetInTouch = () => {
    return (
        <div >
            <h1 className='section-title'>GET IN TOUCH</h1>
            <div className='getintouch container' >
                <div><img src={getintouch} alt="" />
                </div>
                <div className='getintouch-input '>
                    <input type="text" placeholder='Enter Your Name' />
                    <input type="text" placeholder='Enter Your Email' />
                    <input type="text" placeholder='Enter Your Message' />
                    <button className='offer-btn mt-3'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;