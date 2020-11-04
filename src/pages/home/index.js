import React, { useContext } from 'react'
import UserContext from '../../context/userContext';

const HomePage = () => {


    const context = useContext(UserContext);
    if (context.user) {
        return (
            <div>
                <h1>home page</h1>
                <h1>{context.user.username}</h1>
                <button onClick={context.signOut}>sign out</button>
            </div>
        )
    }

    return (
        <div>
            <h1>home page</h1>
            <h1>{345}</h1>
        </div>
    )
}

export default HomePage
