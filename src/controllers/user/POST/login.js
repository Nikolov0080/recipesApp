const axios = require('axios').default;

export default (username, password) => {

    axios.post('http://localhost:5000/api/users/login', {
        username: username,
        password: password
    }).then((resp) => {
        console.log(resp)
    }).catch((err) => {
        console.log(err);
    });

}