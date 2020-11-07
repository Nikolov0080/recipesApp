import React from 'react';
import GuestLinks from './guestLinks';
import UserLinks from './userLinks';
import { Nav, Navbar } from 'react-bootstrap';
import Search from './search';
import DropdownMenu from './dropdown';
import style from './header.module.css';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './logo.ico';

const authBypass = false;

const Navigation = () => {
    return (
        <div className="text-center">

            <Navbar collapseOnSelect expand="lg" bg="light" >
                <LinkContainer to='/'>
                    <Nav.Link>
                        <img alt="logo" className={style.logoImage} src={logo} />
                       
                    </Nav.Link>
                </LinkContainer>
                <DropdownMenu />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Search />
                    </Nav>
                    <Nav>
                        {authBypass === true ?  <GuestLinks /> : <UserLinks />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;