import React from 'react';
import offerimg from '../../../images/offerimg.jpg'
import './Offer.css'
const Offer = () => {
    return (
        <div className='offer-section'>
            <div className='offer-text'>
                <h1>GET <span className='special-text'>10% Discount</span></h1>
                <h2>ON ALL SPICES</h2>
                <button className='offer-btn mt-5'>Know More <i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
            <div><img className='offer-img' src={offerimg} alt="" /></div>
        </div>
    );
};

export default Offer;