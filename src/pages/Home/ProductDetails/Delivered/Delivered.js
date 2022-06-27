import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSpices from '../../../../hooks/useSpices';

const Delivered = () => {

    const { productId } = useParams();
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            }
            )
    }, [productId])

    let { quantity } = products;
    console.log(quantity);
    const handleDeliver = e => {

        e.preventDefault();


        const newQuantity = parseInt(quantity) - 1;
        quantity = newQuantity;
        console.log(newQuantity);
        console.log(quantity);
        // const url = `https://infinite-hamlet-52819.herokuapp.com/product/${productId}`
        // fetch((url), {
        //     method: 'PUT',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ newQuantity })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data);
        //         alert('delivered Successfully')

        //     })



    }









    return (
        <div>
            <button onClick={handleDeliver} >Delivered</button>
        </div>
    );
};

export default Delivered;