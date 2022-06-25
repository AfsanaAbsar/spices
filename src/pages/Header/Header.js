import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg='light' >
                <Container>
                    <Navbar.Brand as={Link} to="/home">CUISINE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/products">PRODUCTS</Nav.Link>
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                            <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;