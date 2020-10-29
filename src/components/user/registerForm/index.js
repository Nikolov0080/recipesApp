import React, { useState } from 'react'
import Input from '../../common/input/input';
import { Button } from 'react-bootstrap';
import registerFunc from '../../../controllers/user/POST/register';
import InputFile from '../../common/input/inputFile';

const RegisterForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleFile = (pic) => {
        setProfilePicture(pic)
    }

    const handleSubmit = () => {

        registerFunc(username, password, rePassword, email, skillLevel, profilePicture).then((resp) => [
            console.log(resp)
        ])
    }

    return (
        <div>
            <Input name="username" func={setUsername} label="username" type="text" />
            <Input name="password" func={setPassword} label="password" type="password" />
            <Input name="rePassword" func={setRePassword} label="rePassword" type="password" />
            <Input name="email" func={setEmail} label="email" type="email" />
            <Input name="skillLevel" func={setSkillLevel} label="skillLevel" type="number" />
            <InputFile name="profilePicture" func={(e) => handleFile(e.target.files[0])} type="file" />

            <Button onClick={handleSubmit} >Register</Button>
        </div>
    )
}

export default RegisterForm;