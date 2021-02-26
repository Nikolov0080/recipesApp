import axios from 'axios';

const exit = (recipeId,userId) => {
    return axios.default.delete('https://interesting-woolen-trampoline.glitch.me/api/recipes/delete-recipe/' + recipeId +'&&' +userId)
    .then(response=>{
        return response;
    })
}

export default exit