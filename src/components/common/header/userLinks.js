import React from 'react'
import { Nav } from 'react-bootstrap';
import { a } from 'react-router-bootstrap';
import style from './header.module.css';
// a makes SPA functionality in the Navigation
import { BrowserRouter } from 'react-router-dom';

const GuestLinks = () => {
    return (
        <div>
            <Nav >
                <BrowserRouter>
                    <a href="/profile">
                        <Nav.Link className={style.links}>Profile</Nav.Link>
                    </a>
                </BrowserRouter>

            </Nav>
        </div>
    )
}

export default GuestLinks;
