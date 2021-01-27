import axios from 'axios';

export default (recipe_id, user_id) => {

    return axios.default.post(
        `https://recipes-api-4334.herokuapp.com/api/recipes/check-likes`,
        {
            recipe_id,
            user_id
        }
        , (err) => {
            console.log(err);
        }
    )
}