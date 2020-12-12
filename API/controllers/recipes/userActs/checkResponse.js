const userSchema = require('../../../models/user/userSchema');

module.exports.checkResponse = (req, res) => {
    // TODO LATER finish it almost there !!!
//     userSchema.find({ likedRecipes: { $in: req.recipeId } }).then(result => {
// // Only in user schema is enough.
//         if (result.length >= 1) {
//            return res.send('true');
//         }

//         return res.send('false');

//     }).catch(err => {
//         console.log(err);

//         return res.send(err);
//     })

    console.log(req.body.recipeId)

}