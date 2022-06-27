import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))



    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Please add a product</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name")} />
                <textarea className='mb-2' placeholder='description' {...register("description", { required: true })} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='vendor' type="text" {...register("vendor")} />
                <input className='mb-2' placeholder='PhotoUrl' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddProduct;