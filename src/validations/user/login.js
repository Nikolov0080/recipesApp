import validator from 'validator';

export default (username, password) => {

    if (validator.isEmpty(username)) {
        return 'empty username'
    }

    if (!validator.isLength(username, { min: 6, max: 16 })) { // returns true thats why "!"
        return 'Username must be minimus 6 characters and maximum 16'
    }

    if (!validator.matches(username, /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/)) {
        return 'Username ca contain only letters and digits';
    }

    return false;
}