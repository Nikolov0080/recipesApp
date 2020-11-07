import React from 'react'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import style from './header.module.css';
// LinkContainer makes SPA functionality in the Navigation

const GuestLinks = () => {
    return (
        <div>
            <Nav >
                <LinkContainer to="/login">
                    <Nav.Link className={style.links}>Sign in</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register">
                    <Nav.Link  className={style.links}>Join now</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default GuestLinks;