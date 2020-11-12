import React from 'react'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import style from './header.module.css';
// LinkContainer makes SPA functionality in the Navigation

const GuestLinks = () => {
    return (
        <div>
            <Nav >
                <LinkContainer to="/profile">
                    <Nav.Link className={style.links}>Profile</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/my-recipes">
                    <Nav.Link  className={style.links}>My recipes</Nav.Link>
                </LinkContainer>
            
            </Nav>
        </div>
    )
}

export default GuestLinks;
