import React, { Component } from 'react'
import FormBox from '../../components/user/formBox';
import RegisterForm from '../../components/user/registerForm';
import ErrorBoundary from '../../errorBoundaries/errorBoundary';

class RegisterPage extends Component {

    render() {
        return (
            <div className="text-center">
                <ErrorBoundary message="while loading or trying to register , please reload the page and try again">
                    <FormBox>
                        <h1>Register</h1>
                        <RegisterForm />
                    </FormBox>
                </ErrorBoundary>
            </div>
        )
    }
}

export default RegisterPage;