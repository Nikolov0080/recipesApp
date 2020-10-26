const axios = require('axios').default;

// axios.defaults.withCredentials = true
export default (username, password) => {
    return axios.post('http://localhost:5000/api/users/login', {
        username: username,
        password: password
    }).then((resp) => {

        const isLogged = resp.headers.hasOwnProperty('auth');

        if (isLogged) {
            document.cookie = "auth=" + resp.headers.auth;
            return {
                status: "Status: OK",
                data: resp.data
            }
        }

        return {
            status: "Error",
            data: resp.data
        }

    }).catch((err) => {
        console.log(err);
    });
}