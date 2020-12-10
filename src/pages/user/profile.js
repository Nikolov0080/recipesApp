import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import profile from '../../controllers/user/GET/profile';
import ProfileInfo from '../../components/user/profileComponents/profileInfo';
import ErrorBoundary from '../../errorBoundaries/errorBoundary';
import UserRecipes from '../../components/recipes/recipesList';
import Loading from '../../components/loading/index';
import CurrentRecipe from '../../components/recipes/currentRecipe';

class UserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        profile().then(profileData => {
            this.setState({
                ...profileData
            })
        }).catch(err => {
            console.log(err)
        })
    }


    showHide = (data) => {
        this.setState(
            { show: !this.state.show }
        )

        if (data) {
            this.setState({
                current: data
            })
        }
    }

    render() {
        if (!this.state.userRecipes) {
            return (
                <Loading />
            )
        }

        return (

            <div>
                <ErrorBoundary message="while loading you profile ,please try again later..." >

                    <ProfileInfo userData={this.state} />

                    {this.state.show === false ?
                        <div>
                            <UserRecipes func={this.showHide} recipes={this.state.userRecipes} />
                            <LinkContainer className="d-flex justify-content-center" to="/create-recipe">
                                <Button size="lg">Create Recipe !</Button>
                            </LinkContainer >
                        </div>
                        : <CurrentRecipe func={this.showHide} data={this.state.current} />
                    }

                    {this.state.userRecipes.length === 0 ?
                        <h1 className="text-center">No recipes yet,go add one</h1> : ''}

                </ErrorBoundary>
            </div>
        )
    }
}

export default UserProfile;