import React from 'react'
import Input from '../../common/input/input';

const LoginForm = () => {
    return (
        <div>
            <Input name="username" label="Username" type="text" />
            <Input name="password" label="Password" type="password" />
        </div>
    )
}

export default LoginForm
 