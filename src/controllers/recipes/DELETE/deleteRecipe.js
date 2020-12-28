import axios from 'axios';

export default (id) => {
    return axios.default.delete('http://localhost:5000/api/recipes/delete-recipe/' + id)
}