const recipeSchema = require('../../../../models/recipes/recipeSchema');

module.exports.addComment = (req, res) => {
    console.log(req.body)

    // recipeSchema.findOneAndUpdate({
    //     _id: req.body.recipe_id
    //   },
    //     { $push: { likes: userId } },
    //     (err, success) => {
    //       if (err) {
    //         console.log(err)
    //       }
    //     }
    //   )
}