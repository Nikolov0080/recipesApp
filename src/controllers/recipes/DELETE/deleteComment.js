import axios from 'axios';

export default (recipeId, commentId) => {
    return axios.default.delete('https://recipes-api-4334.herokuapp.com/api/recipes/delete-comment/' + recipeId + '&&' + commentId)
        .then(response => {
            return response;
        }).catch(e=>{
            console.log(e)
        })
}