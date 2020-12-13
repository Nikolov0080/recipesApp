import setCookie from '../../utils/setCookie';
import axios from 'axios';

export default (username, password, rePassword, email, skillLevel, profilePicture) => {
    // using FormData() to append file and form data to the request
 
    var formData = new FormData();
    formData.append("profilePicture", profilePicture)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("rePassword", rePassword)
    formData.append("email", email)
    formData.append("skillLevel", skillLevel)

    return axios.default.post('http://localhost:5000/api/users/register',

        formData

    ).then((resp) => {
        // TOTO set response of this function with status etc...
        return {
            status: resp.status,
            data: setCookie(resp)
        }
    }).catch((err) => {
        console.log(err);
        return {
            status: "Error",
            data: "Error"
        }
    });
}