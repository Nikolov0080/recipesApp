import React from 'react';
import GuestLinks from './guestLinks';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Search from './search';
import DropdownMenu from './dropdown';

const authBypass = false;

const Navigation = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="light" >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <DropdownMenu />

                        <Search />


                    </Nav>
                    <Nav>
                        <GuestLinks />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
