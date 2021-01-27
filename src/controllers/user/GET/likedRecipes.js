import axios from 'axios';

export default (userId) => {
    return axios.default.get(`https://recipes-api-4334.herokuapp.com/api/users/liked-recipes/${userId}`).then((resp) => {
        return resp;
    }).catch(err=>{
        console.log(err)
    })
}