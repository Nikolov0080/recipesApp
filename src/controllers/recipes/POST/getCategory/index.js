import axios from 'axios';

const exit = (category) => {

    return axios.default.post("https://interesting-woolen-trampoline.glitch.me/api/recipes/get-category",
        { category: category },
        (err) => { console.log(err) })

}

export default exit