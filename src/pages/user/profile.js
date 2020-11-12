import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

class UserProfile extends Component {

    render() {
        return (
            <div>
                <h1>User Profile here</h1>
                <LinkContainer to="/create-recipe">
                    <Button>Create Recipe !</Button>
                </LinkContainer>
            </div>
        )
    }
}

export default UserProfile