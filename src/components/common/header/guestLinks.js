import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// LinkContainer makes SPA functionality in the Navigation

const GuestLinks = () => {
    return (
        <div>
            <Nav >
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default GuestLinks;