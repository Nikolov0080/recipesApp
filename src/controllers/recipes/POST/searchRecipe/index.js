import axios from "axios";

export default (recipeName) => {

    return axios.default.post('https://interesting-woolen-trampoline.glitch.me/api/recipes/search-recipe',
        { recipeName: recipeName.toLowerCase() }
        , (err) => {
            console.log(err);
        })

}