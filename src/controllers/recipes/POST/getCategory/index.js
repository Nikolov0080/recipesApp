import axios from 'axios';

export default (category) => {

    return axios.default.post("http://localhost:5000/api/recipes/get-category",
        { category: category },
        (err) => { console.log(err) })

}