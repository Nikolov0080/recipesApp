import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import { Redirect, Route } from 'react-router-dom';

const GuestRoute = ({ path, component }) => {

    const context = useContext(UserContext);

    const user = context.user;

    if (user === 'guest') {
        return (
            <Route exact path={path} component={component} />
        )
    }

    return (
        <Redirect to={path='/'} />
    )
}

export default GuestRoute;