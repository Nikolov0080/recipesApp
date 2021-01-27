import axios from 'axios';

export default (userId) => {
    axios.default.get(`http://localhost:5000/api/users/created-recipes/${userId}`).then((resp)=>{
        console.log(resp)
    })
}