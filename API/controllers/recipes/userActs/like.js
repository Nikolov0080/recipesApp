const recipeSchema = require('../../../models/recipes/recipeSchema');
const userSchema = require('../../../models/user/userSchema');

module.exports.like = (req, res) => {

    console.log()
    const userId = req.body.user_id

    /*
     TODO
            1. create check do the user already like the current recipe and return data
            2. remove like on click
            3. do the same for favorites !
    */

    recipeSchema.findOneAndUpdate({
        _id: req.body.recipe_id
    },
        { $push: { likes: userId } },
        (err, success) => {
            if (err) {
                console.log(err)
            }
            console.log(success)
        }
    )



    res.send("liked");
}