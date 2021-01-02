import axios from 'axios';

export default (recipeId,userId) => {
    return axios.default.delete('http://localhost:5000/api/recipes/delete-recipe/' + recipeId +'&&' +userId)
    .then(response=>{
        return response;
    })
}