import validator from 'validator';

export default (username, password) => {

    if (validator.isEmpty(username)) {
        return 'empty username'
    }

    if (validator.isEmpty(password)) {
        return 'empty password';
    }

    if (!validator.isLength(username, { min: 6, max: 20 })) { // returns true thats why "!"
        return 'Username must be minimus 6 characters and maximum 20'
    }

    if (!validator.matches(username, /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/)) {
        return 'Username ca contain only letters and digits';
    }



    if (!validator.isLength(password, { min: 6, max: 16 })) { // returns true thats why "!"
        return 'Password must be minimus 6 characters and maximum 16';
    }

    return false;
}