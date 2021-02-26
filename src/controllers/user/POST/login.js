import setCookie from '../../utils/setCookie';
import axios from 'axios';

const exit =(username, password) => {
    return axios.post('https://interesting-woolen-trampoline.glitch.me/api/users/login', {
        username: username,
        password: password
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

export default exit