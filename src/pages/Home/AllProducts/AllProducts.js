import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllProducts.css'
const AllProducts = (props) => {
    const { _id, name, price, description, img, vendor, quantity } = props.spice;
    const navigate = useNavigate();
    const navigateToProductDetails = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{vendor}</p>
            <p>{quantity}</p>
            <button onClick={() => navigateToProductDetails(_id)}>order</button>
        </div>
    );
};

export default AllProducts;