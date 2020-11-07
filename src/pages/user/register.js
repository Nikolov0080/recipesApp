import React, { Component } from 'react'
import RegisterForm from '../../components/user/registerForm';
import ErrorBoundary from '../../errorBoundaries/errorBoundary';

class RegisterPage extends Component {

    render() {
        return (
            <div className="text-center">
                <ErrorBoundary message="while loading or trying to register , please reload the page and try again">
                    <h1>Register page</h1>
                    <RegisterForm />
                </ErrorBoundary>
            </div>
        )
    }
}

export default RegisterPage;