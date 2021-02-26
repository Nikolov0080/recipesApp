import axios from 'axios';

export default () => {
    return axios.get("https://interesting-woolen-trampoline.glitch.me/api/recipes/all-recipes", {
        headers: {
            "cookie_client": document.cookie
        }
    })
}