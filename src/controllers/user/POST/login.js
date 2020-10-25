const axios = require('axios').default;

// axios.defaults.withCredentials = true
export default (username, password) => {
    axios.post('http://localhost:5000/api/users/login', {
        username: username,
        password: password
    }).then((resp) => {
        console.log(resp)
        document.cookie = "auth=" + resp.headers.auth;
        console.log(resp.headers)
    }).catch((err) => {
        console.log(err);
    });
}