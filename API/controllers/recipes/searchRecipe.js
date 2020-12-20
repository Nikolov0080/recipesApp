const recipeSchema = require('../../models/recipes/recipeSchema');

module.exports.searchRecipe = (req, res) => {
    const recipeName = req.body.recipeName;
    recipeSchema.find({ recipeName: { $regex: recipeName } })
        .then((response) => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })

}