const axios = require('axios').default;

export default () => {

    return axios.get('https://recipes-api-4334.herokuapp.com/api/users/profile',
        {
            headers: {
                "cookie_client": document.cookie
            }
            // TODO  finish authentication with headers - done
        }
    ).then(userData => {
        return userData.data;
    }).catch(err => {
        console.log(err.message);
        return err.message;
    })
}