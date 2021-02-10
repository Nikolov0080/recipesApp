import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Input from '../../common/input/input';
import loginFunc from '../../../controllers/user/POST/login';
import { useHistory } from 'react-router-dom';
import loginValidator from '../../../validations/user/login';
import UserContext from '../../../context/userContext';
import readCookie from '../../../utils/readCookie';
import { LinkContainer } from 'react-router-bootstrap';
import LoadingBtn from '../../common/loadingBtn/index';
import ErrorMessage from '../../errorMessage';

const LoginForm = () => {

    const [loading, setLoading] = useState(false);
    const context = useContext(UserContext);
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    const authUser = () => {
        const userData = readCookie(document.cookie);
        context.signIn(userData);
    }

    const buttons = () => {

        if (loading) {
            return (<LoadingBtn />);
        }

        return (<Button type="submit" size="lg">Login</Button>);
    }

    useEffect(() => {

        if (KeyboardEvent || MouseEvent) { // setting validation error on key or mouse press
            setError(loginValidator(username, password))

            loginValidator(username, password) === false
                ? setIsValid(true)
                : setIsValid(false)
        }

    }, [password, username, isValid]);

    const loginUser = (e) => {
        e.preventDefault();
        if (isValid) {// if valid to login
            setLoading(true);
            loginFunc(username, password).then((resp) => {
                console.log(resp)
                setError(resp.data)
                if (resp.status === "Error") {
                    console.log(`Error: ${resp.data}`);
                    setDisplayError(true)
                    // TODO handle the error with notification or something...
                    setError(resp.data)
                    setLoading(false);
                } else {
                    console.log(resp.status)
                    console.log(resp.data)
                    authUser();
                    setError(false);
                    history.push('/profile');
                    // TODO on successful login stuff...
                }
            })
            setError(false); // clean the error
            setDisplayError(false); // hide the error
        } else {
            console.log(error);
            setDisplayError(true);
        }
    }

    return (
        <div className="h-auto ">
            {displayError !== false ? <ErrorMessage variant={"auth"} text={error} /> : ''}
            <form onSubmit={(e) => loginUser(e)}>
                {/* {new ErrorEvent('Error')} TEST */}
                <Input func={setUsername} name="username" label="Username" type="text" />
                <Input func={setPassword} name="password" label="Password" type="password" />
                <br />

                {buttons()}
            </form>
            <hr />
            <h3>
                Or click     <LinkContainer to="/register">
                    <Button>Here</Button>
                </LinkContainer> create an account!
            </h3>
            <hr />
        </div>
    )
}

export default LoginForm;