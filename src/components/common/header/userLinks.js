import React from 'react'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import style from './header.module.css';
// LinkContainer makes SPA functionality in the Navigation
import { BrowserRouter } from 'react-router-dom';

const GuestLinks = () => {
    return (
        <div>
            <Nav >
                <BrowserRouter>
                    <LinkContainer to="/profile">
                        <Nav.Link className={style.links}>Profile</Nav.Link>
                    </LinkContainer>
                </BrowserRouter>

            </Nav>
        </div>
    )
}

export default GuestLinks;
