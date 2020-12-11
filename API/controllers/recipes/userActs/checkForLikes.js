const userSchema = require('../../../models/user/userSchema');

exports.checkForLikes = (recipeId) => {
    // TODO LATER
    userSchema.find({ likedRecipes: { $in: recipeId } }).then(result => {

        if (result.length >= 1) {
            const resultObject = {
                recipeLikes:result.length,
                
            }
        }



        console.log(result);
    })
}