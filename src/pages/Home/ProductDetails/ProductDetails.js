import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Delivered from './Delivered/Delivered';
import Restock from './Restock/Restock';



const ProductDetails = () => {
    const { productId } = useParams();
    const [spice, setSpice] = useState({});

    //fetching single data by id
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setSpice(data))
    }, [])
    return (
        <div>
            <div>
                <h1>{spice.name}</h1>
                <img src={spice.img} alt="" />
                <p>price:${spice.price}</p>
                <p>quantity :{spice.quantity}</p>
                <Delivered></Delivered>

            </div>
            <Restock></Restock>

        </div>
    );
};

export default ProductDetails;



