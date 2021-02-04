import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import profile from '../../controllers/user/GET/profile';
import ProfileInfo from '../../components/user/profileComponents/profileInfo';
import ErrorBoundary from '../../errorBoundaries/errorBoundary';
import Pagination from '../../components/pagination/index';
import Loading from '../../components/loading/index';
import CurrentRecipe from '../../components/recipes/currentRecipe';

class UserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            loading: true
        }
    }

    componentDidMount() {
        window.scroll({
            top: 100,
            behavior: 'smooth'
        });

        profile().then(profileData => {
            if (profileData === "Network Error") {
                this.setState({
                    profileData
                })
            }
            this.setState({
                ...profileData
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidUpdate() {
        if (this.state.userRecipes && (this.state.loading === true)) {
            this.setState({ loading: false })
        }
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

        if (this.state.profileData === "Network Error") {
            return (
                <div>
                    <h1 style={{ height: "900px" }}>Server Error 503 Service unavailable</h1>
                </div>
            )
        }

        if (this.state.loading) {
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
                            <hr />
                            <LinkContainer className="d-flex justify-content-center" to="/create-recipe">
                                <Button size="lg">Create Recipe !</Button>
                            </LinkContainer >
                            <Pagination allRecipes={this.state.userRecipes}/>
                        </div>
                        : <CurrentRecipe func={this.showHide} data={this.state.current} />
                    }

                    {this.state.userRecipes.length >= 0 ?
                        <h1 className="text-center">You have not added any recipes</h1> : ''}

                </ErrorBoundary>
            </div>
        )
    }
}

export default UserProfile;