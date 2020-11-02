import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import Input from '../../common/input/input';
import loginFunc from '../../../controllers/user/POST/login';
import { useHistory } from 'react-router-dom';
import loginValidator from '../../../validations/user/login';

const LoginForm = () => {

    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    useEffect(() => {

        if (KeyboardEvent || MouseEvent) { // setting validation error ot key ot mouse press
            setError(loginValidator(username, password))

            loginValidator(username, password) === false
                ? setIsValid(true)
                : setIsValid(false)
            console.log(isValid)
        }

    }, [password, username, isValid]);


    const loginUser = () => {

        if (isValid) {// if valid to login
            loginFunc(username, password).then((resp) => {
                console.log(resp)
                if (resp.status === "Error") {
                    console.log(`Error: ${resp.data}`);
                    // TODO handle the error with notification or something...
                    setError(resp.data)
                } else {
                    console.log(resp.status)
                    console.log(resp.data)
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
            <Input func={setUsername} name="username" label="Username" type="text" />
            <Input func={setPassword} name="password" label="Password" type="password" />
            <Button onClick={loginUser}>Login</Button>
        </div>
    )
}

export default LoginForm;