import React from 'react';
import './Footer.css'
import SocialLink from './SocialLink/SocialLink';
const Footer = () => {
    return (
        <div>
            <SocialLink></SocialLink>
            <div className='footer-bg' >
                <div className='footer align-items-center'>
                    <div className='p-5'> <h3>CUISINE</h3>
                        <small className='text-white'>Cuisine is a spice website. It helps vendors to sell their products through cuisine. Different vendors can upload their products.Vendors can manage their products from it</small>
                    </div>
                    <div className='p-5'>
                        <h3>Contact</h3>
                        <div className='contact-details text-white'>
                            <small><i className="fas fa-home"></i>  24A, Park Road, Main Street</small>
                            <small><i className="fas fa-envelope"></i>  admin.cuisine.33@gmail.com</small>
                            <small><i className="fas fa-phone-alt"></i>  +957 124 56</small>
                            <small><i className="fas fa-globe"></i>  www.cuisine.com</small>
                        </div>
                    </div>
                    <div className='p-5 subscribe'>
                        <h3>Subscribe To Our Newsletter</h3>
                        <input placeholder='Enter Your Email' type="text" />
                        <button >Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;