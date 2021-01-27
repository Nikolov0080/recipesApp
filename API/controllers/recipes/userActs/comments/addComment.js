const recipeSchema = require('../../../../models/recipes/recipeSchema');
const mongoose = require("mongoose");
const moment = require('moment');

module.exports.addComment = (req, res) => {

    const _id = mongoose.Types.ObjectId();
    const timeCreated = moment().format('lll');
    const recipe_id = req.body.commentData.recipeId;

    const comment = {
        _id,
        timeCreated,
        ...req.body.commentData

<<<<<<< HEAD
     recipeSchema.findOneAndUpdate({
=======
    }

    recipeSchema.findOneAndUpdate({
>>>>>>> 2ed718924fbbd3475b04ec48908f2c0da5f42fb1
        _id: recipe_id
    },
        { $push: { comments: comment } },
        (err) => {
            if (err) {
                console.log(err)
                return res.status(500).send('error');
            }
        }
    )

    res.status(201).send('asd');

}