import axios from 'axios';

export default (commentData) => {
    axios.default.post("http://localhost:5000/api/recipes/add-comment", {
        commentData
    })
}