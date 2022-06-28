import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Delivered = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = `https://infinite-hamlet-52819.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            }
            )
    }, [productId])
    const { quantity } = products;

    const handleDeliver = (e) => {
        e.preventDefault();

        if (quantity) {
            const updatedQuantity = parseInt(quantity) - 1;

            const url = `https://infinite-hamlet-52819.herokuapp.com/product/${productId}`
            fetch((url), {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ updatedQuantity })
            })
                .then(res => res.json())
                .then(data => {

                    alert('Delivered Successfully')
                    window.location.reload();
                })

        }
    }

    return (
        <div onClick={handleDeliver}>
            Deliver Item
        </div>
    );
};

export default Delivered;