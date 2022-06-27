import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Restock = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            }
            )
    }, [productId])
    const { quantity } = products;
    // console.log(quantity);
    const handleRestock = (e) => {
        e.preventDefault();
        if (quantity) {
            const addedQuantity = e.target.quantity.value;
            console.log(addedQuantity);
            const updatedQuantity = parseInt(quantity) + parseInt(addedQuantity);
            // console.log(updatedQuantity);
            const url = `http://localhost:5000/product/${productId}`
            fetch((url), {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ updatedQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    alert('Restocked Successfully')

                })
        }
    }
    return (
        <div>
            <form onSubmit={handleRestock}>
                <input type="number" name='quantity' />
                <button type='submit'>Restock</button>
            </form>
        </div>

    );
};

export default Restock;