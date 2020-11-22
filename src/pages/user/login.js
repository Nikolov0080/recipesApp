import React, { Component } from 'react'
import FormBox from '../../components/user/formBox';
import LoginForm from '../../components/user/loginForm'
import ErrorBoundary from '../../errorBoundaries/errorBoundary';

class LoginPage extends Component {

    render() {
        return (
            <div className="text-center" >
                <ErrorBoundary message="while trying to login or load the page please reload the page and try again">
                    <FormBox>
                        <h1>Login</h1>
                        <LoginForm />
                    </FormBox>
                </ErrorBoundary>
            </div>
        )
    }
}

export default LoginPage;