import axios from 'axios';

const exit = (userId) => {
    return axios.default.get(`https://interesting-woolen-trampoline.glitch.me/api/users/liked-recipes/${userId}`).then((resp) => {
        return resp;
    }).catch(err=>{
        console.log(err)
    })
}

export default exit