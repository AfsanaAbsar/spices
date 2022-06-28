import React from 'react';
import { Link } from 'react-router-dom';
import useSpices from '../../hooks/useSpices';
import Banner from '../Home/Banner/Banner'
import AllProducts from './AllProducts/AllProducts';
import GetInTouch from './GetInTouch/GetInTouch';
import './Home.css'
import Offer from './Offer/Offer';
import OurPartner from './OurPartner/OurPartner';
const Home = () => {
    const [spices, setSpices] = useSpices()
    return (
        <div className='m-0'>
            <Banner></Banner>
            <h1 className='section-title'>OUR SPICES</h1>
            <div className='product-card-home container mt-5 mb-5'>
                {
                    spices.slice(0, 6).map(spice => <AllProducts
                        key={spice._id}
                        spice={spice}

                    ></AllProducts>)

                }

            </div>
            <div className='mx-auto d-flex align-items-center justify-content-center mt-5'>
                <button className='manage-btn'><Link to="/manage" >Manage Products</Link></button></div>
            <Offer></Offer>
            <OurPartner></OurPartner>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;