import axios from 'axios';

export default (recipe_id, user_id) => {

    return axios.default.post(
        `https://interesting-woolen-trampoline.glitch.me/api/recipes/check-likes`,
        {
            recipe_id,
            user_id
        }
        , (err) => {
            console.log(err);
        }
    )
}