import React, { useContext } from 'react';
import GuestLinks from './guestLinks';
import UserLinks from './userLinks';
import { Nav, Navbar } from 'react-bootstrap';
import Search from './searchRecipe/search';
import style from './header.module.css';
import { a } from 'react-router-bootstrap';
import logo from './logo.ico';
import UserContext from '../../../context/userContext';
import { BrowserRouter} from 'react-router-dom';

const Navigation = () => {

    const context = useContext(UserContext);

    const isLogged = context.user === 'guest';

    return (
        <div className="text-center" style={{ boxShadow: " 1px 4px 9px lightgray" }}>

            <Navbar collapseOnSelect expand="lg" bg="light" >
             <BrowserRouter>
              <a href='/'>
                    
                        <img alt="logo" className={style.logoImage} src={logo} />

                 
                </a>
             </BrowserRouter>
               
           
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