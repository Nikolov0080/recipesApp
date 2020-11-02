import jwt from 'jsonwebtoken';

export default (cookie) => {
    const token = cookie.replace('auth=', '');
    const decodedToken = jwt.decode(token)  // userData
    return decodedToken;
}