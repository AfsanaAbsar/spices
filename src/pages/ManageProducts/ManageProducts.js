import React from 'react';
import useSpices from '../../hooks/useSpices';

const ManageProducts = () => {
    const [spices, setSpices] = useSpices();
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure To Delete?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`

            fetch(url, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = spices.filter(spice => spice._id !== id)
                    setSpices(remaining)
                })
        }
    }
    return (
        <div>
            {
                spices.map(spice =>

                    <div key={spice._id} className='d-flex'>
                        <h3>{spice.name}</h3>
                        <button onClick={() => handleDeleteProduct(spice._id)}>X</button>
                    </div>)
            }
        </div>
    );
};

export default ManageProducts;