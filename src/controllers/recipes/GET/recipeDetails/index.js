import axios from 'axios';

const exit = (id) => {
  return  axios.default.get("https://interesting-woolen-trampoline.glitch.me/api/recipes/recipe-details/" + id, {
        headers: {
            "cookie_client": document.cookie
        }
    })
}

export default exit