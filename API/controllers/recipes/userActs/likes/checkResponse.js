const userSchema = require('../../../../models/user/userSchema');

module.exports.checkResponse = (req, res) => {

    const recipeId = req.url.replace("/check-likes?", '')

    // TODO ADD AND FAVORITES FUNCTIONALITY

    return userSchema.find({ likedRecipes: { $in: recipeId } }).then(result => {

        if (result.length >= 1) {
            return res.send('true');
        }

        return res.send('false');

    }).catch(err => {
        console.log(err);

        return res.send(err);
    })
}