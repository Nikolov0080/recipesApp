import React, { useState, useEffect } from 'react'
import UserContext from './userContext'
import axios from "axios";
import deleteCookie from '../utils/deleteCookie';
import Cookies from 'js-cookies';
import readCookie from '../utils/readCookie';

const SessionContext = (props) => {

    const [user, setUser] = useState('guest');
    // FIX AUTH ERR BELOW
    const authUser = () => {
        if (Cookies.getItem('auth')) { //checking for cookie existence
            console.log(user)
            // decoding th cookie
            const decodedCookie = readCookie(Cookies.getItem('auth'));
            // checking the if JWT data contains secret value 
            const isLogged = JSON.stringify(decodedCookie).includes('"secret":"meow"');

            return isLogged === true ? decodedCookie : 'guest'
        } else {
            return "guest"
        }
    }
    useEffect(() => {
        setUser(authUser());
        // eslint-disable-next-line
    }, []);

    const signIn = (userData) => {
        setUser(userData);
    }
    console.log('session check for infinity-loop')
    const signOut = () => {

        return axios('http://localhost:5000/api/users/logout', {
            method: 'GET',
        }).then((resp) => {
            setUser('guest');
            deleteCookie('auth');
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <UserContext.Provider
            value={{
                user,
                signIn,
                signOut
            }}
        >
            <div>
                {props.children}
            </div>
        </UserContext.Provider>

    )
}

export default SessionContext;