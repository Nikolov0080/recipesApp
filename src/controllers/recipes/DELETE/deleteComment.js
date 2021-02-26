import axios from 'axios';

const exit = (recipeId, commentId) => {
    return axios.default.delete('https://interesting-woolen-trampoline.glitch.me/api/recipes/delete-comment/' + recipeId + '&&' + commentId)
        .then(response => {
            return response;
        }).catch(e=>{
            console.log(e)
        })
}

export default exit