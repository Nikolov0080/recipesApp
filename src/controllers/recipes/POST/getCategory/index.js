import axios from 'axios';

export default (category) => {

    return axios.default.post("https://interesting-woolen-trampoline.glitch.me/api/recipes/get-category",
        { category: category },
        (err) => { console.log(err) })

}