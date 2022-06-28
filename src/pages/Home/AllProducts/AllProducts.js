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
        <div className='product m-0'>
            <img src={img} alt="" />
            <h3 className='product-name pt-4'>{name}</h3>
            <h5>Price : ${price}</h5>
            <p>{description}</p>
            <h5>Vendor: {vendor}</h5>
            <h5>Available : {quantity} kg</h5>
            <button className='product-btn' onClick={() => navigateToProductDetails(_id)}>Stock Details <i className="fas fa-long-arrow-alt-right"></i></button>
        </div>
    );
};

export default AllProducts;