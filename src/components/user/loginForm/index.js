import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Input from '../../common/input/input';
import loginFunc from '../../../controllers/user/POST/login';

const LoginForm = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const loginUser = () => {
        loginFunc(username,password)
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