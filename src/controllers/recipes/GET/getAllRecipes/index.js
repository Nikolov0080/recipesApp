import axios from 'axios';

export default () => {
    return axios.get("http://localhost:5000/api/recipes/all-recipes", {
        headers: {
            "cookie_client": document.cookie
        }
    })
}