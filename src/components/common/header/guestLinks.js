import React from 'react'
import { Nav } from 'react-bootstrap';
import style from './header.module.css';
// a makes SPA functionality in the Navigation
import { BrowserRouter } from 'react-router-dom'
const GuestLinks = () => {
    return (
        <div>
            <Nav >
                <BrowserRouter>
                
                        <Nav.Link href="/login" className={style.links}>Sign in</Nav.Link>

                        <Nav.Link  href="/register" className={style.links}>Join now</Nav.Link>
                </BrowserRouter>

            </Nav>
        </div>
    )
}

export default GuestLinks;