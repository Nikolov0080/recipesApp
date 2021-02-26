import axios from 'axios';

const exit = (recipe_id, user_id) => {

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

export default exit