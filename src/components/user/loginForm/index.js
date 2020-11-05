import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react'
import Input from '../../common/input/input';
import loginFunc from '../../../controllers/user/POST/login';
import { useHistory } from 'react-router-dom';
import loginValidator from '../../../validations/user/login';
import UserContext from '../../../context/userContext';
import readCookie from '../../../utils/readCookie';

const LoginForm = () => {

    const context = useContext(UserContext)
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

    useEffect(() => {

        if (KeyboardEvent || MouseEvent) { // setting validation error ot key ot mouse press
            setError(loginValidator(username, password))

            loginValidator(username, password) === false
                ? setIsValid(true)
                : setIsValid(false)
        }

    }, [password, username, isValid]);

    const loginUser = (e) => {
        e.preventDefault();
        if (isValid) {// if valid to login
            loginFunc(username, password).then((resp) => {
                console.log(resp)
                if (resp.status === "Error") {
                    console.log(`Error: ${resp.data}`);
                    setDisplayError(true)
                    // TODO handle the error with notification or something...
                    setError(resp.data)
                } else {
                    console.log(resp.status)
                    console.log(resp.data)
                    authUser();
                    setError(false);
                    history.push('/');
                    // TODO on successful login stuff...
                }
            })
            setError(false); // clean the error
            setDisplayError(false); // hide the error
        } else {
            console.log(error);
            setDisplayError(true)
        }
    }

    return (
        <div>
            {displayError !== false ? <p>{error}</p> : ''}
            <form onSubmit={(e) => loginUser(e)}>
                {/* {new ErrorEvent('Error')} TEST */}
                <Input func={setUsername} name="username" label="Username" type="text" />
                <Input func={setPassword} name="password" label="Password" type="password" />
                <Button type="submit" >Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;