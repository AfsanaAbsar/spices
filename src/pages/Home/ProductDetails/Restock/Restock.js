import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Restock = () => {
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

    const handleRestock = (e) => {
        e.preventDefault();
        if (quantity) {
            const addedQuantity = e.target.quantity.value;
            console.log(addedQuantity);
            const updatedQuantity = parseInt(quantity) + parseInt(addedQuantity);

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

                    alert('Restocked Successfully')
                    e.target.reset()
                    window.location.reload();

                })

        }
    }
    return (
        <div>
            <form onSubmit={handleRestock}>
                <input placeholder='Enter Amount' type="number" name='quantity' />
                <button className='border-0 p-1 text-white bg-dark' type='submit'>Restock</button>
            </form>
        </div>

    );
};

export default Restock;