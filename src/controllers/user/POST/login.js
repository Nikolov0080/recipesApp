import setCookie from '../../utils/setCookie';
// const axios = require('axios').default;
// axios.defaults.withCredentials = true
import axios from 'axios'
export default (username, password) => {
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