import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner-img  d-flex align-items-center justify-content-center mb-5">
                <div className="text-center mt-3">

                    <h1 className="text-white">Join With Cuisine</h1>
                    <h3 className="text-white">Serving The Original Flavour <span className='year-display'>Since 2000</span></h3>
                    <button className="mt-3 btn">Explore more</button>

                </div>
            </div>

        </>
    );
};

export default Banner;