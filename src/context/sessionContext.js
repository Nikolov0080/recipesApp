import React, { useState } from 'react'
import UserContext from './userContext'
import axios from "axios";
import deleteCookie from '../utils/deleteCookie';


const SessionContext = (props) => {

    const [user, setUser] = useState('guest')

    const signIn = (userData) => {
        setUser(userData);
    }

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

export default SessionContext
