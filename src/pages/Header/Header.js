import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {

        signOut(auth);

    }
    return (
        <div className='m-0'>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg='light'  >
                <Container>
                    <Navbar.Brand as={Link} to="/home"><span className='logo'>CUISINE</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/products">PRODUCTS</Nav.Link>

                            {
                                user ? <>
                                    <Nav.Link as={Link} to="/manage">MANAGE PRODUCTS</Nav.Link>
                                    <Nav.Link as={Link} to="/add">ADD PRODUCTS</Nav.Link>
                                    <Nav.Link onClick={handleSignOut}>LOG OUT</Nav.Link>
                                </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login">LOG IN</Nav.Link>
                                        <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
                                    </>
                            }



                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;