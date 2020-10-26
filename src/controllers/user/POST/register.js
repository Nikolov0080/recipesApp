import setCookie from '../../utils/setCookie';
import axios from 'axios';

export default (username, password, email, skillLevel, profilePicture) => {

    return axios.default.post('http://localhost:5000/api/users/register', {
        username: username,
        password: password,
        email: email,
        skillLevel: skillLevel,
        profilePicture: profilePicture
    }).then((resp) => {

        return setCookie(resp);

    }).catch((err) => {
        console.log(err);
        return {
            status: "Error",
            data: "Error"
        }
    });
}