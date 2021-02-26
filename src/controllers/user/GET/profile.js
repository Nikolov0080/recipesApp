const axios = require('axios').default;

const exit = () => {

    return axios.get('https://interesting-woolen-trampoline.glitch.me/api/users/profile',
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

export default exit