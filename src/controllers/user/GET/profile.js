const axios = require('axios').default;

export default (id) => {
console.log()
    return axios.get('http://localhost:5000/api/users/profile',
        {
            headers: {
                "cookie_client":document.cookie
            }
            // TODO  finish authentication with headers
        }
    ).then(data => {
        console.log(data);
    })

}