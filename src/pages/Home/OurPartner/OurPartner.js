import React from 'react';
import './OurPartner.css'
import partner1 from '../../../images/Organic Spices Ltd..png'
import partner2 from '../../../images/indiana.png'
import partner3 from '../../../images/spiceandco.png'
const OurPartner = () => {
    return (
        <div>
            <h1 className='section-title'>OUR PARTNERS</h1>
            <div className='partner container'>
                <div>
                    <img src={partner1} alt="" />
                </div>
                <div>
                    <img src={partner2} alt="" />
                </div>
                <div>
                    <img src={partner3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurPartner;