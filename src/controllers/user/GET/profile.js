const axios = require('axios').default;

export default (id) => {

    return axios.get('http://localhost:5000/api/users/profile',
{
    headers:{
        "auth":"Fuck"
    }
    // TODO  finish authentication with headers
}
    ).then(data => {
        console.log(data);
    })

}