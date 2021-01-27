import React, { useState, useEffect } from 'react'
import UserContext from './userContext'
import axios from "axios";
import deleteCookie from '../utils/deleteCookie';
import Cookies from 'js-cookies';
import readCookie from '../utils/readCookie';

const SessionContext = (props) => {

    const [user, setUser] = useState('guest1');

    const authUser = () => {
        if (Cookies.getItem('auth')) { //checking for cookie existence
            console.log("########### === check 4 cookie on page reload (-;")
            // decoding th cookie
            const decodedCookie = readCookie(Cookies.getItem('auth'));
            // checking the if JWT data contains secret value 
            const isLogged = JSON.stringify(decodedCookie).includes('"secret":"meow"');
            return isLogged === true ? decodedCookie : 'guest'
        } else {
            return "guest";
        }
    }

    useEffect(() => {
        setUser(authUser());
    }, []);

    const signIn = (userData) => {
        setUser(userData);
    }

    const signOut = () => {

        return axios('https://recipes-api-4334.herokuapp.com/api/users/logout', {
            method: 'GET',
        }).then((resp) => {
            setUser('guest');
            deleteCookie('auth');
            return true;
        }).catch((err) => {
            console.log(err)
            return false
        })
    }
    if (user === "guest1") {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <UserContext.Provider
            value={{
                user,
                signIn,
                signOut,
            }}
        >
            <div>
                {props.children}
            </div>
        </UserContext.Provider>
    )
}

export default SessionContext;