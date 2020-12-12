const userSchema = require('../../../models/user/userSchema');

exports.checkForLikes = (recipeId) => {
    // TODO LATER
    return userSchema.find({ likedRecipes: { $in: recipeId } }).then(result => {

        if (result.length >= 1) {
            return {
                liked: true,
            }
        }

        return {
            liked: false
        }

    })
}