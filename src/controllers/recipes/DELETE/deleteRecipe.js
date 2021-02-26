import axios from 'axios';

export default (recipeId,userId) => {
    return axios.default.delete('https://interesting-woolen-trampoline.glitch.me/api/recipes/delete-recipe/' + recipeId +'&&' +userId)
    .then(response=>{
        return response;
    })
}