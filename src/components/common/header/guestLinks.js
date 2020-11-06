import React from 'react'
import { Link } from 'react-router-dom';

const GuestLinks = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link as="button" to="/" >home</Link>
                </li>

                <li>
                    <Link to="/login" >login</Link>
                </li>

                <li>
                    <Link to="/register" >register</Link>
                </li>
            </ul>

        </div>
    )
}

export default GuestLinks;