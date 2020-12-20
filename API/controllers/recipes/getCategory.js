const recipeSchema = require('../../models/recipes/recipeSchema');

module.exports.getCategory = (req, res) => {
    const category = req.body.category

    recipeSchema.find({ category: { $regex: category } })
        .then((response) => {
            if (response.length === 0) {
                res.status(204).send('no recipes in this category');
            }
            res.send(response)
        })
        .catch(err => {
            res.status(500).send('something went wrong')
            console.log(err)
        })
}