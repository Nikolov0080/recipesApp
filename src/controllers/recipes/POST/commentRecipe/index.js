import axios from 'axios';

export default (commentData) => {
    axios.default.post("https://recipes-api-4334.herokuapp.com/api/recipes/add-comment", {
        commentData
    })
}