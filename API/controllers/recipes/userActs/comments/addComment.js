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
    }

    console.log(comment);

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