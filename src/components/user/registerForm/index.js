import React, { useState, useContext } from 'react'
import Input from '../../common/input/input';
import { Button } from 'react-bootstrap';
import registerFunc from '../../../controllers/user/POST/register';
import InputFile from '../../common/input/inputFile';
import registerValidator from '../../../validations/user/register';
import ImagePreview from '../../common/imagePreview';
import { useHistory } from 'react-router-dom';
import readCookie from '../../../utils/readCookie';
import UserContext from '../../../context/userContext';
import LoadingBtn from '../../common/loadingBtn/index';
import ErrorMessage from '../../errorMessage';

const RegisterForm = () => {

    const context = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [profilePicture, setProfilePicture] = useState('no image');
    const [displayErr, setDisplayErr] = useState(false);
    const [error, setError] = useState('');
    const [file, setFile] = useState(false);

    const authUser = () => {
        const userData = readCookie(document.cookie);
        context.signIn(userData);
    }

    const handleFile = (image) => {
        setFile(image)
        setProfilePicture(image)
    }

    const buttons = () => {
        if (loading) { return (<LoadingBtn />) }
        return (<Button type="submit" >Register</Button>)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = registerValidator(username, password, rePassword, email, skillLevel)
        if (!isValid) {
            setLoading(true);
            registerFunc(username, password, rePassword, email, skillLevel, profilePicture).then((resp) => {
                console.log(resp)
                if (resp.status === 200) {
                    setDisplayErr(true);
                    setError(resp.data.data);
                    setLoading(false);
                } else {
                    setDisplayErr(false);
                    authUser();
                    history.push('/profile');
                }
            })
        } else {
            setDisplayErr(true);
            setError(isValid);
        }
    }

    return (
        <div>
            {displayErr ? (
                <ErrorMessage variant={"auth"} text={error} />
            ) : ''}
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input name="username" func={setUsername} label="username" type="text" />
                <Input name="password" func={setPassword} label="password" type="password" />
                <Input name="rePassword" func={setRePassword} label="rePassword" type="password" />
                <Input name="email" func={setEmail} label="email" type="email" />
                <Input name="skillLevel" func={setSkillLevel} label="skillLevel" type="number" />

                <InputFile name="profilePicture" func={(e) => handleFile(e.target.files[0])} type="file" >
                    <ImagePreview image={file} />
                </InputFile>

                <br />
                {buttons()}
            </form>

        </div>
    )
}

export default RegisterForm;