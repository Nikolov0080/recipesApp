
import React from 'react';

const UserContext = React.createContext({
    user: null,
    signIn: () => { },
    signOut: () => { },
    currentSearch: null
});

export default UserContext;