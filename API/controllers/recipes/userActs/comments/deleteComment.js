const recipeSchema = require('../../../../models/recipes/recipeSchema');

module.exports.deleteComment = (req, res) => {
    const [recipeId, commentId] = req.params.id.split("&&");

    const recipe = recipeSchema.findOne({ _id: recipeId });

    Promise.all([recipe]).then(resp => {
        console.log(resp)
    })

}