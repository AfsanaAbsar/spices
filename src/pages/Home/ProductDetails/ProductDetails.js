import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Delivered from './Delivered/Delivered';
import Restock from './Restock/Restock';
import './ProductDetails.css'



const ProductDetails = () => {
    const { productId } = useParams();
    const [spice, setSpice] = useState({});

    //fetching single data by id
    useEffect(() => {
        const url = `https://infinite-hamlet-52819.herokuapp.com/product/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setSpice(data))
    }, [])


    return (


        <Card className='w-50 mx-auto align-items-center text-center border-0 p-5'>
            <Card.Img variant="top" src={spice.img} className='w-50' />
            <Card.Body>
                <Card.Title> <h2>{spice.name}</h2></Card.Title>
                <Card.Title> <h5>{spice._id}</h5>
                </Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><h5>Price:${spice.price}</h5> </ListGroupItem>
                <ListGroupItem><h5>Quantity :{spice.quantity} kg</h5> </ListGroupItem>
                <ListGroupItem><h5>Supplier :{spice.vendor}</h5> </ListGroupItem>
                <ListGroupItem><p>Description :{spice.description}</p> </ListGroupItem>

            </ListGroup>
            <Card.Body className='card-btn'>
                <Card.Link ><button className='deliver-btn'><Delivered></Delivered></button></Card.Link>

            </Card.Body>
            <Restock></Restock>
            <Card.Body className='card-btn'>
                <Card.Link as={Link} to="/manage" ><button className='manage-btn'>Manage Products</button></Card.Link>

            </Card.Body>
        </Card>
    );
};

export default ProductDetails;



