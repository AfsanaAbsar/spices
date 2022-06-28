import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSpices from '../../hooks/useSpices';

const ManageProducts = () => {
    const [spices, setSpices] = useSpices();
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure You want To Delete?')
        if (proceed) {
            const url = `https://infinite-hamlet-52819.herokuapp.com/product/${id}`

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
            <div className='mx-auto d-flex align-items-center justify-content-center mt-5'>
                <button className='manage-btn'><Link to="/add" >Add New Product</Link></button></div>
            <h2 className='section-title'>OR</h2>
            <h2 className='section-title'>Delete a Product</h2>
            <div>


                {
                    spices.map(spice =>

                        <div key={spice._id} className='d-flex'>

                            <Table striped bordered hover className='container w-50'>

                                <tbody>

                                    <tr>

                                        <td>Id : {spice._id}</td>
                                        <td>Name : {spice.name}</td>
                                        <td>Quantity : {spice.quantity}</td>
                                        <td>Vendor : {spice.vendor}</td>
                                        <td> <button onClick={() => handleDeleteProduct(spice._id)}><i className="fas fa-times text-danger"></i></button></td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;