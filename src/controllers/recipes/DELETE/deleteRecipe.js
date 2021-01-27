import axios from 'axios';

export default (recipeId,userId) => {
    return axios.default.delete('https://recipes-api-4334.herokuapp.com/api/recipes/delete-recipe/' + recipeId +'&&' +userId)
    .then(response=>{
        return response;
    })
}