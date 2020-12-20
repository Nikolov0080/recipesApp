import axios from "axios";

export default (recipeName) => {

    return axios.default.post('http://localhost:5000/api/recipes/search-recipe',
        { recipeName: recipeName }
        , (err) => {
            console.log(err);
        })

}