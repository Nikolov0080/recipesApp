import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import profile from '../../controllers/user/GET/profile';

class UserProfile extends Component {

    render() {

       profile(4).then(console.log)

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