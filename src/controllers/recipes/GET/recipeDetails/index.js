import axios from 'axios';

export default (id) => {
  return  axios.default.get("https://recipes-api-4334.herokuapp.com/api/recipes/recipe-details/" + id, {
        headers: {
            "cookie_client": document.cookie
        }
    })
}