const recipeSchema = require('../../models/recipes/recipeSchema');

module.exports.deleteRecipe = (req, res) => {
    const id = req.params.id

    recipeSchema.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            return res.send('err');
        }
    }).then((result) => {
        return res.send(result)
    });


    
}