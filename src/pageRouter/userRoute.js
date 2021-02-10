import React, { useContext } from 'react'
import UserContext from '../context/userContext';
import { Redirect, Route } from 'react-router-dom';

const UserRoute = ({ path, component }) => {

    const context = useContext(UserContext);

    const user = context.user;

    if (user !== 'guest') {
        return (
            <Route exact path={path} component={component} />
        )
    }

    return (
        <div>
            <Redirect to={path = '/'} />
        </div>
    )
}

export default UserRoute;