import axios from 'axios';

const exit = () => {
    return axios.get("https://interesting-woolen-trampoline.glitch.me/api/recipes/all-recipes", {
        headers: {
            "cookie_client": document.cookie
        }
    })
}

export default exit