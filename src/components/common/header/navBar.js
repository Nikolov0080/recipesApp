import React from 'react';
import GuestLinks from './guestLinks';
import { Navbar, NavDropdown } from 'react-bootstrap';
import Search from './search';
import DropdownMenu from './dropdown';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            
               <DropdownMenu />
                <Search />
            </Navbar>
            <GuestLinks />
        </div>
    )
}

export default Navigation
