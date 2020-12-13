import axios from 'axios';

export default (recipe_id) => {

    return axios.default.get(
        `http://localhost:5000/api/recipes/check-likes?${recipe_id}`
    , (err) => {
        console.log(err);
    }
    )
}