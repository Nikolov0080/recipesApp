const recipeSchema = require('../../../../models/recipes/recipeSchema');

module.exports.addComment = (req, res) => {

    const recipe_id = req.body.commentData.recipeId;

    const comment = {
        ...req.body.commentData
    }

    console.log(recipe_id)

    // todo finish it
    // add object id to the comment so it could be found
    recipeSchema.findOneAndUpdate({
        _id: recipe_id
    },
        { $push: { comments: comment } },
        (err) => {
            if (err) {
                console.log(err)
            }
        }
    )

    res.send('asd')

}