const userSchema = require('../../models/user/userSchema'); // Its a Model tho...

// uses the  ID to add it to 

// user recipes array

// favorites array

// liked recipes

exports.updateUser = (userId, type, recipeId) => {
    // type can be [favorites ||  likedRecipes || userRecipes]
    userSchema.findByIdAndUpdate(userId,
        { $push: { [type]: recipeId } },
        { safe: true, upsert: true },
        function (err, data) {
            if (err) { console.log(err); return }
            console.log(data);
        }
    )
}