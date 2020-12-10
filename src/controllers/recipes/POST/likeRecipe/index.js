import axios from 'axios';

export default  (recipe_id, user_id) => {

    return axios.default.post('http://localhost:5000/api/recipes/like',
        {
            recipe_id,
            user_id
        }, (err) => {
            console.log(err);
        }
    )
}