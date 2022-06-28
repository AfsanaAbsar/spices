import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {

        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Product Added Successfully')
                e.target.reset()

            })




    };
    return (
        <div className='w-50 mx-auto'>
            <h1 className='section-title'>Please Add a Product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Vendor' type="text" {...register("vendor")} />
                <input className='mb-2' placeholder='PhotoUrl' type="text" {...register("img")} />
                <input className='manage-btn' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddProduct;