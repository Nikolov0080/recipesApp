import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import style from './header.module.css';

const DropdownMenu = () => {
    return (
        <div className="text-center">
            <NavDropdown className={style.drop} title="CATEGORIES" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
}

export default DropdownMenu;