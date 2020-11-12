import React, { useContext } from 'react';
import GuestLinks from './guestLinks';
import UserLinks from './userLinks';
import { Nav, Navbar } from 'react-bootstrap';
import Search from './search';
import DropdownMenu from './dropdown';
import style from './header.module.css';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './logo.ico';
import UserContext from '../../../context/userContext';

const authBypass = true;

const Navigation = () => {

    const context = useContext(UserContext);
    console.log(context)
    const isLogged = context.user === 'guest';

    return (
        <div className="text-center" style={{ boxShadow: " 1px 4px 9px lightgray" }}>

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
                        {isLogged === true ? <GuestLinks /> : <UserLinks />}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;