import axios from 'axios';

export default (category) => {

    return axios.default.post("https://recipes-api-4334.herokuapp.com/api/recipes/get-category",
        { category: category },
        (err) => { console.log(err) })

}