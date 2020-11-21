import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import profile from '../../controllers/user/GET/profile';
import ProfileInfo from '../../components/user/profileComponents/profileInfo';
import ErrorBoundary from '../../errorBoundaries/errorBoundary';
import UserRecipes from '../../components/recipes/recipesList';

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

        if (!this.state) {
            return (
                <h1>sd</h1>
                // IMPLEMENT NICE LOADING SCREEN TODO !!!
            )
        }

        return (

            <div>
                <ErrorBoundary message="while loading you profile ,please try again later..." >
                    <h1>User Profile here</h1>

                    <ProfileInfo userData={this.state} />

                    <UserRecipes recipes={this.state.userRecipes}/>

                    <LinkContainer to="/create-recipe">
                        <Button>Create Recipe !</Button>
                    </LinkContainer>
                </ErrorBoundary>
            </div>
        )
    }
}

export default UserProfile