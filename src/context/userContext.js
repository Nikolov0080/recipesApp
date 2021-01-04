
import React from 'react';

const UserContext = React.createContext({
    user: null,
    signIn: () => { },
    signOut: () => { }   
});

export default UserContext;