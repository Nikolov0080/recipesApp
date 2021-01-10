const recipeSchema = require('../../../../models/recipes/recipeSchema');
// todo finish bulding object of the comment
module.exports.addComment = (req, res) => {
    
    const {
        recipeCreatorId,
        commentatorId,
        username,
        profilePicURL,
        commentData
    } = req.body.commentData;



    // recipeSchema.findOneAndUpdate({
    //     _id: req.body.recipe_id
    // },
    //     { $push: { comments: comment } },
    //     (err, success) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //     }
    // )


    res.send('okeyyy');
}