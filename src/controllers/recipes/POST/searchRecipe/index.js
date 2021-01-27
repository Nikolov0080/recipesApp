import axios from "axios";

export default (recipeName) => {

    return axios.default.post('https://recipes-api-4334.herokuapp.com/api/recipes/search-recipe',
        { recipeName: recipeName.toLowerCase() }
        , (err) => {
            console.log(err);
        })

}