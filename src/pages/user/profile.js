import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import profile from '../../controllers/user/GET/profile';
import ProfileInfo from '../../components/user/profileComponents/profileInfo';
import ErrorBoundary from '../../errorBoundaries/errorBoundary';

class UserProfile extends Component {

    componentDidMount() {
        profile().then(profileData => {
            this.setState({
                ...profileData
            })
        }).catch(err => {
            console.log(err)
        })
    }


    render() {

        return (
            
            <div>
            <ErrorBoundary message="while loading you profile ,please try again later..." >
                  <h1>User Profile here</h1>
                <ProfileInfo userData={this.state} />
                <LinkContainer to="/create-recipe">
                    <Button>Create Recipe !</Button>
                </LinkContainer>
            </ErrorBoundary>
            </div>
        )
    }
}

export default UserProfile