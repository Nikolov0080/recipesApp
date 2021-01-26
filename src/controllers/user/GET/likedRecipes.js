import axios from 'axios';

export default (userId) => {
    return axios.default.get(`http://localhost:5000/api/users/liked-recipes/${userId}`).then((resp) => {
        return resp;
    }).catch(err=>{
        console.log(err)
    })
}