import axios from 'axios';

export default () => {
    return axios.get("https://recipes-api-4334.herokuapp.com/api/recipes/all-recipes", {
        headers: {
            "cookie_client": document.cookie
        }
    })
}