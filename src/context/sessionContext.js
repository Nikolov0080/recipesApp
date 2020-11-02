import React, { Component } from 'react'
import UserContext from './userContext'


const SessionContext = (props) => {



    return (
        <UserContext.Provider
            value={{
                user,
                signIn,
                signOut
            }}
        >
            <div>
                {this.props.children}
            </div>
        </UserContext.Provider>

    )
}

export default SessionContext
