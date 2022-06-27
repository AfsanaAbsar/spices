import React from 'react';
import useSpices from '../../hooks/useSpices';
import Banner from '../Home/Banner/Banner'
import AllProducts from './AllProducts/AllProducts';
import './Home.css'
const Home = () => {
    const [spices, setSpices] = useSpices()
    return (
        <div>
            <Banner></Banner>
            <div className='product-card-home container mt-5'>
                {
                    spices.slice(0, 6).map(spice => <AllProducts
                        key={spice._id}
                        spice={spice}

                    ></AllProducts>)

                }
            </div>
        </div>
    );
};

export default Home;