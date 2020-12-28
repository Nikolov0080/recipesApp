import axios from 'axios';

export default (id) => {
  return  axios.default.get("http://localhost:5000/api/recipes/recipe-details/" + id, {
        headers: {
            "cookie_client": document.cookie
        }
    })
}