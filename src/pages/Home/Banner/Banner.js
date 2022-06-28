import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner-img  d-flex align-items-center justify-content-center mb-5">
                <div className="text-center mt-3">

                    <h1 className="text-white">Join With Cuisine</h1>
                    <h3 className="text-white">Serving The Original Flavour <span className='special-text'>Since 2000</span></h3>
                    <button className="mt-3 btn">Explore more <i className="fas fa-long-arrow-alt-right"></i></button>

                </div>
            </div>

        </>
    );
};

export default Banner;