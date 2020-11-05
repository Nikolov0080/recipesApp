import React, { Component } from 'react'
import LoginForm from '../../components/user/loginForm'
import ErrorBoundary from '../../errorBoundaries/errorBoundary';

class LoginPage extends Component {

    render() {
        return (
            <div>
              <ErrorBoundary message="while trying to login or load the page please reload the page and try again">
                    <h1>login page</h1>
                    <LoginForm />
                </ErrorBoundary>
            </div>
        )
    }

}

export default LoginPage;