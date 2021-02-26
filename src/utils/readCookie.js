import jwt from 'jsonwebtoken';

const exit = (cookie) => {
    const token = cookie.replace('auth=', '');
    const decodedToken = jwt.decode(token);  // userData
    return decodedToken;
}

export default exit