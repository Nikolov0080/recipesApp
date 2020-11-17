const axios = require('axios').default;

export default (id) => {

    return axios.get('http://localhost:5000/api/users/profile',
        {
            headers: {
                "cookie_client": document.cookie
            }
            // TODO  finish authentication with headers
        }
    ).then(userData => {
        return userData;
    })
}