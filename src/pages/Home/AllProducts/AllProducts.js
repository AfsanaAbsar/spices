import React from 'react';
import './AllProducts.css'
const AllProducts = (props) => {
    const { name, price, description, img, vendor, quantity } = props.spice;
    return (
        <div>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{vendor}</p>
            <p>{quantity}</p>
        </div>
    );
};

export default AllProducts;