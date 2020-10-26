import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Input from '../../common/input/input';
import loginFunc from '../../../controllers/user/POST/login';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {
        loginFunc(username, password).then((resp) => {
            console.log(resp)
            if (resp.status === "Error") {
                console.log(`Error: ${resp.data}`);
                // TODO handle the error with notification or something...
            } else {
                console.log(resp.status)
                console.log(resp.data)
                // TODO on successful login stuff...
            }
        })
    }

    return (
        <div>
            <Input func={setUsername} name="username" label="Username" type="text" />
            <Input func={setPassword} name="password" label="Password" type="password" />
            <Button onClick={loginUser}>Login</Button>
        </div>
    )
}

export default LoginForm;