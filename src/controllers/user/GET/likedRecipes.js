import axios from 'axios';

export default (userId) => {
    return axios.default.get(`https://interesting-woolen-trampoline.glitch.me/api/users/liked-recipes/${userId}`).then((resp) => {
        return resp;
    }).catch(err=>{
        console.log(err)
    })
}