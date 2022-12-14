import React from 'react';
import './Products.css'
import useSpices from '../../../hooks/useSpices'
import AllProducts from '../AllProducts/AllProducts';
const Products = () => {

    const [spices, setSpices] = useSpices()
    return (
        <div className='product-card-home container mt-5'>
            {
                spices.map(spice => <AllProducts
                    key={spice._id}
                    spice={spice}

                ></AllProducts>)

            }
        </div>
    );
};

export default Products;