import React from 'react';
import './Products.css'
import useSpices from '../../../hooks/useSpices'
import AllProducts from '../AllProducts/AllProducts';
const Products = () => {

    const [spices, setSpices] = useSpices()
    return (
        <div>
            {
                spices.map(spice => <AllProducts
                    spice={spice}

                ></AllProducts>)
            }
        </div>
    );
};

export default Products;