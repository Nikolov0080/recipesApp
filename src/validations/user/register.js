import validator from 'validator';

export default (username, password, rePassword, email, skillLevel,profilePicture) => {

    // USERNAME
    if (validator.isEmpty(username)) {
        return 'empty username'
    }

    if (!validator.isLength(username, { min: 6, max: 20 })) { // returns true thats why "!"
        return 'Username must be minimus 6 characters and maximum 20'
    }

    if (!validator.matches(username, /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/)) {
        return 'Username ca contain only letters and digits';
    }
    // USERNAME
    // PASSWORD
    if (validator.isEmpty(password)) {
        return 'empty password';
    }

    if (!validator.isLength(password, { min: 6, max: 20 })) { // returns true thats why "!"
        return 'Password must be minimus 6 characters and maximum 20';
    }

    if (!validator.equals(password, rePassword)) {
        return 'Password and Repeat password must match';
    }
    // PASSWORD

    // EMAIL
    if (validator.isEmpty(email)) {
        return 'Email is required'
    }

    if (!validator.isEmail(email)) {
        return 'Not a valid email'
    }
    // EMAIL

    // SKILL LEVEL
    if (validator.isEmpty(skillLevel)) {
        return 'Skill Level empty'
    }

    if (!(+skillLevel > 1 && +skillLevel < 10)) {
        return 'Skill Level must be from 1 to 10'
    }
    // SKILL LEVEL

    // PROFILE PICTURE
  // not required
    // PROFILE PICTURE

    return false;
}