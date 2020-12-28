const recipeSchema = require('../../models/recipes/recipeSchema');

module.exports.deleteRecipe = (req, res) => {
    const id = req.params.id
    console.log(id)

    recipeSchema.deleteOne({ _id: id }, (err,doc) => {
        if (err) {
            console.log(err);
          return  res.send('err');
        }

        return res.send(doc)
    })
}