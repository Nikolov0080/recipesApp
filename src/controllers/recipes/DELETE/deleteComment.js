import axios from 'axios';

export default (recipeId, commentId) => {
    return axios.default.delete('http://localhost:5000/api/recipes/delete-comment/' + recipeId + '&&' + commentId)
        .then(response => {
            return response;
        }).catch(e=>{
            console.log(e)
        })
}
