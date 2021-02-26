import axios from "axios";

const exit = (recipeName) => {

    return axios.default.post('https://interesting-woolen-trampoline.glitch.me/api/recipes/search-recipe',
        { recipeName: recipeName.toLowerCase() }
        , (err) => {
            console.log(err);
        })

}

export default exit